// Add an event listener to handle when the context menu item is clicked
chrome.contextMenus.onClicked.addListener(function(info, tab) {
	// Perform actions based on the clicked context menu item
	if (info.menuItemId === "myContextMenu") {
	  // Do something when the context menu item with ID "myContextMenu" is clicked
	  console.log("Context menu item clicked!");
	  console.log("Info:", info);
	  console.log("Tab:", tab);
	}
  });
  
  // Create a context menu item
  chrome.runtime.onInstalled.addListener(function() {
	// Create a context menu item
	chrome.contextMenus.create({
	  id: "myContextMenu", // Unique ID for the context menu item
	  title: "My Context Menu Item", // Text displayed in the context menu
	  contexts: ["all"], // Contexts where the menu item will appear (e.g., "page", "link", "selection", etc.)
	});
  });
  