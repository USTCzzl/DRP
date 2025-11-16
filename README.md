# Double-Reactive Planning (DRP) Framework

Multi-robot task allocation framework with capability evolution and environment exploration under Linear Temporal Logic (LTL) specifications.

## Project Structure

```
.
├── core/                   # Core framework modules
├── planning/              # Planning algorithms
├── visualization/         # Visualization utilities
├── docs/                  # GitHub Pages website
├── RA_L2025/             # Nature journal manuscript and figures
├── config.yaml           # Configuration file
├── main.py               # Main entry point
├── run_comparison.py     # Comparison experiments runner
├── scenarios*.py         # Scenario definitions
└── requirements.txt      # Python dependencies
```

## Experimental Results

### Experiment 1: DRP Performance Validation
- Location: `experiment_20251115_234205/`
- 10 scenarios demonstrating DRP framework performance
- 100% success rate, 92.8% average exploration coverage

### Comparative Evaluation
- Location: `comparison_results_20251117_000942/`
- 12 scenarios comparing 3 methods:
  - V-RTLMP (baseline without capability evolution)
  - DRP(fullmap) (no exploration, full map knowledge)
  - DRP (complete framework)

## GitHub Pages Website

Interactive website showcasing experimental results:
- See: `docs/` folder
- Features: 42 assets including animations, snapshots, and performance charts
- Deployment guide: See `WEBSITE_GUIDE.md`

## Usage

### Run Main Experiments
```bash
python main.py --scenario exp1
```

### Run Comparison Study
```bash
python run_comparison.py
```

## Requirements

```bash
pip install -r requirements.txt
```

## Nature Journal Submission

Manuscript and figures are in `RA_L2025/` directory.

## Website Deployment

See `WEBSITE_GUIDE.md` for detailed instructions on deploying to GitHub Pages.

---

Built for Nature journal submission
