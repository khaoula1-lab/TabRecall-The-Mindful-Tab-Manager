const API_URL = "http://127.0.0.1:8000";
let currentView = "active";
document.addEventListener("DOMContentLoaded", () => {
    loadTabs();
    // Toggle views
    document.getElementById("btn-active").addEventListener("click", () => switchView("active"));
    document.getElementById("btn-archived").addEventListener("click", () => switchView("archived"));
    // Form Submission
    document.getElementById("save-tab-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const url = document.getElementById("tab-url").value;
        const title = document.getElementById("tab-title").value || null;
        const why = document.getElementById("tab-why").value;
        try {
            const response = await fetch(`${API_URL}/tabs/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, title, why, remind_at: null })
            });
            if (response.ok) {
                // Clear input form
                document.getElementById("save-tab-form").reset();
                // Reload tabs
                loadTabs();
            } else {
                alert("Failed to save tab.");
            }
        } catch (error) {
            console.error("Error saving tab:", error);
        }
    });
});
function switchView(view) {
    currentView = view;
    document.querySelectorAll(".toggle-btn").forEach(btn => btn.classList.remove("active"));
    
    if (view === "active") {
        document.getElementById("btn-active").classList.add("active");
    } else {
        document.getElementById("btn-archived").classList.add("active");
    }
    loadTabs();
}
async function loadTabs() {
    const grid = document.getElementById("tabs-grid");
    grid.innerHTML = '<div class="loading">Loading tabs...</div>';
    try {
        const response = await fetch(`${API_URL}/tabs/?status=${currentView}`);
        if (!response.ok) throw new Error("Could not fetch tabs");
        
        const tabs = await response.json();
        grid.innerHTML = "";
        if (tabs.length === 0) {
            grid.innerHTML = `<div class="loading">No ${currentView} tabs found. You're in the clear! 🌸</div>`;
            return;
        }
        tabs.forEach(tab => {
            const card = document.createElement("div");
            card.className = "tab-card";
            
            // Format date
            const date = new Date(tab.created_at).toLocaleDateString();
            card.innerHTML = `
                <div>
                    <h3><a href="${tab.url}" target="_blank">${tab.title || tab.url}</a></h3>
                    <div class="tab-why-badge">💡 ${tab.why}</div>
                </div>
                <div class="tab-footer">
                    <span>Saved ${date}</span>
                    ${currentView === 'active' 
                        ? `<button class="btn-archive" onclick="archiveTab(${tab.id})">Done</button>` 
                        : `<span style="color: var(--accent-green)">✓ Archived</span>`
                    }
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = `<div class="loading">Error loading tabs: ${error.message}</div>`;
    }
}
async function archiveTab(id) {
    try {
        const response = await fetch(`${API_URL}/tabs/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "archived" })
        });
        if (response.ok) {
            loadTabs();
        } else {
            alert("Failed to archive tab");
        }
    } catch (error) {
        console.error("Error archiving:", error);
    }
}