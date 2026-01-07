// Chart Configuration and Initialization
class ChartManager {
  constructor() {
    this.charts = {};
    this.defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#ffffff',
            font: {
              family: 'Space Grotesk'
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#ffffff'
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: '#ffffff'
          }
        }
      }
    };
  }
  
  // Line Chart
  createLineChart(canvasId, data, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    
    const config = {
      type: 'line',
      data: data,
      options: { ...this.defaultOptions, ...options }
    };
    
    this.charts[canvasId] = new Chart(ctx, config);
    return this.charts[canvasId];
  }
  
  // Bar Chart
  createBarChart(canvasId, data, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    
    const config = {
      type: 'bar',
      data: data,
      options: { ...this.defaultOptions, ...options }
    };
    
    this.charts[canvasId] = new Chart(ctx, config);
    return this.charts[canvasId];
  }
  
  // Doughnut Chart
  createDoughnutChart(canvasId, data, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#ffffff',
              font: {
                family: 'Space Grotesk'
              }
            }
          }
        }
      }
    };
    
    this.charts[canvasId] = new Chart(ctx, config);
    return this.charts[canvasId];
  }
  
  // Update chart data
  updateChart(chartId, newData) {
    if (this.charts[chartId]) {
      this.charts[chartId].data = newData;
      this.charts[chartId].update();
    }
  }
  
  // Destroy chart
  destroyChart(chartId) {
    if (this.charts[chartId]) {
      this.charts[chartId].destroy();
      delete this.charts[chartId];
    }
  }
}

// Initialize chart manager
const chartManager = new ChartManager();

// Sample data generators
const DataGenerator = {
  generateTimeSeriesData(points = 24, min = 0, max = 100) {
    const labels = [];
    const data = [];
    const now = new Date();
    
    for (let i = points - 1; i >= 0; i--) {
      const time = new Date(now - i * 3600000); // Subtract hours
      labels.push(time.getHours() + ':00');
      data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    
    return { labels, data };
  },
  
  generateCategoryData(categories = ['Server 1', 'Server 2', 'Server 3'], min = 0, max = 100) {
    const data = categories.map(() => Math.floor(Math.random() * (max - min + 1)) + min);
    return data;
  }
};
