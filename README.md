# AIDCMS Web Application

## Project Structure

```
ai-dcim/
│
├── index.html                  # Login page
├── dashboard.html              # Main dashboard
├── logout.html                # Logout page
│
├── assets/
│   ├── css/
│   │   ├── input.css          # Tailwind input CSS file
│   │   └── output.css         # Generated Tailwind CSS
│   ├── js/
│   │   ├── sidebar.js         # Sidebar menu toggle
│   │   ├── tabs.js            # Tab switching functionality
│   │   └── charts.js          # Chart utilities (Chart.js, ECharts)
│   └── images/               # Static images
│
├── auth/
│   ├── forgot-password.html
│   ├── mfa.html
│   └── role-selection.html
│
├── servers/
│   ├── server-list.html
│   ├── server-detail.html
│   └── tabs/
│       ├── live-logs.html
│       ├── performance-history.html
│       └── threshold-configuration.html
│
├── network/
│   ├── topology-map.html
│   └── tabs/
│       ├── device-inventory.html
│       ├── performance-monitoring.html
│       └── status-indicator.html
│
├── storage-capacity/
│   ├── storage-clusters.html
│   └── tabs/
│       ├── volume-usage.html
│       ├── iops-insights.html
│       └── disk-health-prediction.html
│
├── energy-cooling/
│   ├── energy-dashboard.html
│   └── tabs/
│       ├── energy-efficiency.html
│       ├── temperature-heatmaps.html
│       ├── energy-cooling.html
│       ├── cooling-system.html
│       └── ai-cooling-optimization.html
│
├── ai-optimization/
│   ├── predictive-maintenance.html
│   └── tabs/
│       ├── anomaly-detection.html
│       ├── workload-optimization.html
│       ├── action-logs.html
│       └── ml-model-status.html
│
├── alerts/
│   ├── alerts-centre.html
│   ├── alert-detail.html
│   └── tabs/
│       ├── alert-configuration.html
│       └── notification-settings.html
│
├── analytics/
│   ├── historical-trends.html
│   └── tabs/
│       ├── future-demand-forecasting.html
│       └── resource-allocation.html
│
├── integrations/
│   ├── iot-sensors.html
│   └── tabs/
│       ├── bms.html
│       ├── itsm.html
│       └── cloud.html
│
├── administration/
│   ├── user-list.html
│   └── tabs/
│       ├── roles-permissions.html
│       ├── audit-log.html
│       └── user-activity.html
│
├── governance/
│   ├── threshold-settings.html
│   └── tabs/
│       ├── automation-rules.html
│       ├── data-retention.html
│       ├── api-keys.html
│       └── system-preferences.html
│
├── package.json              # Node.js dependencies
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # This file
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode (watch for changes):**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start local server:**
   ```bash
   npm run serve
   ```

## Tailwind Configuration

The project uses Tailwind CSS with the following customizations:
- **Dark mode:** Enabled with class strategy
- **Custom colors:** 
  - `primary`: #00BFFF (Deep Sky Blue)
  - `background-light`: #f5f7f8
  - `background-dark`: #121212
  - `surface-dark`: #1E1E1E
  - `border-dark`: #314d68
  - `accent-green`: #39FF14
  - `text-light`: #E0E0E0
  - `text-medium`: #90adcb
  - `status-high`: #2ECC71
  - `status-medium`: #F39C12
  - `status-low`: #E74C3C
- **Custom font family:** Inter
- **Border radius:** DEFAULT: 0.5rem, lg: 0.75rem, xl: 1rem
- **Plugins:** Forms and Container Queries

## JavaScript Modules

### sidebar.js
- Handles sidebar toggle functionality
- Manages active menu item highlighting
- Responsive navigation for mobile devices

### tabs.js
- Tab switching functionality
- Supports multiple tab containers
- Automatic tab initialization

### charts.js
- Chart utilities for data visualization
- Support for Chart.js and ECharts
- Pre-configured themes matching the design system

## Usage

1. Run `npm run dev` to start watching for CSS changes
2. Update your HTML files to use the generated CSS:
   ```html
   <link href="./assets/css/output.css" rel="stylesheet">
   ```
3. Include JavaScript modules as needed:
   ```html
   <script src="./assets/js/sidebar.js"></script>
   <script src="./assets/js/tabs.js"></script>
   <script src="./assets/js/charts.js"></script>
   ```

## File Naming Conventions

- Use kebab-case for all HTML files
- Tab files should be placed in respective `tabs/` subdirectories
- JavaScript modules should be descriptive and functional
- CSS files follow standard naming (input/output)

## Development Notes

- All paths in HTML files should be relative to the root
- Use semantic HTML5 structure
- Follow the established design system
- Test responsive behavior across all breakpoints
