import { useState } from "react";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <ul className="favorites">
          <li>
            <span className="sidebar-icon">📱</span>
            AirDrop
          </li>
          <li className="active">
            <span className="sidebar-icon">🏠</span>
            Home
          </li>
          <li>
            <span className="sidebar-icon">💻</span>
            Desktop
          </li>
          <li>
            <span className="sidebar-icon">📄</span>
            Documents
          </li>
          <li>
            <span className="sidebar-icon">⬇️</span>
            Downloads
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>iCloud</h3>
        <ul>
          <li>
            <span className="sidebar-icon">☁️</span>
            iCloud Drive
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Tags</h3>
        <ul className="tags">
          <li><span className="tag red"></span>Red</li>
          <li><span className="tag orange"></span>Orange</li>
          <li><span className="tag yellow"></span>Yellow</li>
          <li><span className="tag green"></span>Green</li>
          <li><span className="tag blue"></span>Blue</li>
          <li><span className="tag purple"></span>Purple</li>
          <li><span className="tag gray"></span>Gray</li>
        </ul>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="window-controls">
        <div className="control close"></div>
        <div className="control minimize"></div>
        <div className="control zoom"></div>
      </div>
      <div className="navigation-buttons">
        <button className="nav-button">
          <span className="nav-icon">◀</span>
        </button>
        <button className="nav-button">
          <span className="nav-icon">▶</span>
        </button>
      </div>
      <div className="view-options">
        <button className="view-button icon-button">
          <span className="view-icon">☰</span>
        </button>
        <button className="view-button icon-button">
          <span className="view-icon">▤</span>
        </button>
        <button className="view-button icon-button">
          <span className="view-icon">◈</span>
        </button>
      </div>
      <div className="action-buttons">
        <button className="action-button">Share</button>
        <button className="action-button">Tag</button>
      </div>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

function FileList() {
  const files = [
    { name: 'Applications', icon: '📱', type: 'folder', date: 'Today', size: '--' },
    { name: 'Documents', icon: '📁', type: 'folder', date: 'Yesterday', size: '--' },
    { name: 'Downloads', icon: '📁', type: 'folder', date: 'Yesterday', size: '--' },
    { name: 'Desktop', icon: '📁', type: 'folder', date: 'Yesterday', size: '--' },
    { name: 'Pictures', icon: '📁', type: 'folder', date: 'Yesterday', size: '--' },
  ];

  return (
    <div className="file-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Modified</th>
            <th>Size</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className="file-item">
              <td>
                <span className="file-icon">{file.icon}</span>
                {file.name}
              </td>
              <td>{file.date}</td>
              <td>{file.size}</td>
              <td>{file.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Toolbar />
        <FileList />
      </div>
    </div>
  );
}

export default App;
