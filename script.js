function toggleTheme() {
  const root = document.documentElement;
  if (root.style.getPropertyValue('--bg') === '#f9f9f9') {
    root.style.setProperty('--bg', '#1e1e1e');
    root.style.setProperty('--text', '#f1f1f1');
    root.style.setProperty('--card-bg', '#2c2c2c');
  } else {
    root.style.setProperty('--bg', '#f9f9f9');
    root.style.setProperty('--text', '#222');
    root.style.setProperty('--card-bg', '#fff');
  }
}

