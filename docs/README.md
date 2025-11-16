# Double-Reactive Planning (DRP) - Experimental Results

This is the GitHub Pages site for the DRP framework experimental results.

## Setup Instructions

1. **Push the `docs` folder to your GitHub repository**
2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or your default branch)
   - Select folder: `/docs`
   - Click "Save"

3. **Access your site**:
   - Your site will be available at: `https://[username].github.io/[repository-name]/`
   - GitHub will provide the exact URL in the Pages settings

## Local Preview

To preview the website locally before pushing:

```bash
cd docs
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
docs/
├── index.html              # Main webpage
├── assets/
│   ├── exp1/              # Experiment 1 data
│   │   ├── animations/    # GIF animations (10 files)
│   │   ├── environments/  # Environment snapshots (10 files)
│   │   └── performance_charts/  # Performance analysis charts (3 files)
│   └── comparison/        # Comparison experiment data
│       ├── snapshots/     # Scenario snapshots (12 files)
│       ├── figures/       # Detailed analysis charts (6 files)
│       └── comprehensive_comparison.png
└── README.md
```

## Features

- 📊 **Interactive Overview**: Project summary with key statistics
- 🎯 **Experiment 1**: 10 scenarios showcasing DRP performance with detailed charts
  - Task success rate visualization
  - Exploration coverage and execution steps analysis
  - Overall performance summary
- ⚖️ **Comparative Evaluation**: Head-to-head comparison with baseline methods
  - Comprehensive comparison chart
  - Method comparison bar charts
  - Success rate heatmap
  - Execution steps analysis
  - Grouped scenario analysis
  - Performance summary across all methods
  - Correlation analysis between metrics
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, professional Nature journal themed interface with smooth animations

## Customization

### Update GitHub Link
In `index.html`, line 434, replace the placeholder:
```html
<a href="https://github.com/yourusername/drp-framework" class="btn">
```

### Add More Content
You can easily add more experiments by:
1. Adding files to the appropriate `assets/` subdirectory
2. Updating the JavaScript arrays in `index.html` (see lines 390-450)

## Technologies Used

- Pure HTML/CSS/JavaScript (no dependencies)
- Responsive grid layout
- CSS animations and transitions
- Vanilla JavaScript for tab switching

---

Built for the Nature journal submission
