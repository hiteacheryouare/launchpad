'use client';
export default () => (
  <iframe
    src={`${window.location.origin}/view/eyJuYW1lIjoiSm9obiBEb2UiLCJwaG90b1VSTCI6Imh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvT0lQLmtqQ1VQMDZXRFVNUjg4aTV3bzJTcXdBQUFBP3BpZD1JbWdEZXQmcnM9MSIsImRlc2NyaXB0aW9uIjoiSGkhIEkgbGlrZSB0byBidWlsZCB0aGluZ3MgdXNpbmcgbXkgYXdlc29tZSBza2lsbHMhIiwiaW5zdGFncmFtIjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kYWZ0cHVuay8iLCJmYWNlYm9vayI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kYWZ0cHVuay8iLCJ0d2l0dGVyIjoiaHR0cHM6Ly90d2l0dGVyLmNvbS9kYWZ0cHVuay8iLCJ5b3V0dWJlIjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZGFmdHB1bmsiLCJ0aWt0b2siOiIiLCJkaXNjb3JkIjoiIiwicGludGVyZXN0IjoiIiwic3BvdGlmeSI6IiIsInNuYXBjaGF0IjoiIiwicmVkZGl0IjoiIiwidHdpdGNoIjoiIiwibWVzc2VuZ2VyIjoiIiwicGhvbmUiOiIoODAwKSA4NjctNTMwOSIsImVtYWlsIjoiaGVsbG9Aam9obmRvZS5jbyIsIm1hZ2ljTGluayI6IiJ9`}
    style={{
      width: "50rem",
      height: "30rem",
    }}
    className="rounded-lg m-auto portrait:hidden"
  ></iframe>
);