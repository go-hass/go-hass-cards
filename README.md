# Go Cards 🏠 Home Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Custom%20Cards-blue.svg)](https://www.home-assistant.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Lit](https://img.shields.io/badge/Lit-324FFF?logo=lit&logoColor=white)](https://lit.dev/)

A collection of custom cards for Home Assistant built with TypeScript and Lit. These cards provide enhanced functionality and beautiful UI components for your Home Assistant dashboard.

## 📋 Table of Contents

- [Features](#-features)
- [Available Cards](#-available-cards)
- [Installation](#-installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🎨 **Modern UI**: Beautiful, responsive card designs
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ⚡ **Lit Framework**: Fast, lightweight web components
- 🏗️ **Modular Architecture**: Easy to extend and customize
- 📱 **Mobile Friendly**: Responsive design for all devices
- 🔌 **Easy Integration**: Simple installation via HACS or manual setup

## 🃏 Available Cards

### Area Card

A comprehensive area card that displays area information along with sensor data like temperature, humidity, and power consumption.

**Features:**
- 📊 Real-time sensor data display
- 🌡️ Temperature and humidity monitoring
- ⚡ Power consumption tracking
- 🎛️ Customizable layout with aspect ratio control
- 🔧 Configurable sensor classes
- 📱 Responsive design

## 🚀 Installation

### Method 1: HACS (Recommended)

1. Open HACS in your Home Assistant
2. Go to **Frontend** → **Explore & Download Repositories**
3. Search for `go-hass-cards`
4. Click **Download this repository with HACS**
5. Restart Home Assistant

### Method 2: Manual Installation

1. Download the latest `go-hass-cards.js` from the [releases page](../../releases)
2. Place the file to your `www` folder in Home Assistant
3. Add the resource to your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/go-hass-cards.js
      type: module
```

4. Restart Home Assistant

## 📖 Usage

### Area Card

Add the area card to your Lovelace dashboard:

```yaml
type: custom:go-area-card
area: living_room
aspect_ratio: 16:9
sensor_classes:
  - temperature
  - humidity
  - power
```

#### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `area` | string | **Required** | The area ID to display |
| `aspect_ratio` | string | `16:9` | Card aspect ratio (e.g., `4:3`, `1:1`) |
| `sensor_classes` | array | `['temperature', 'humidity', 'power']` | Sensor types to display |
| `top_card` | object | - | Additional card to display at the top |
| `side_card` | object | - | Additional card to display on the side |

#### Example Configurations

**Basic Area Card:**
```yaml
type: custom:go-area-card
area: bedroom
```

**Custom Aspect Ratio:**
```yaml
type: custom:go-area-card
area: kitchen
aspect_ratio: 4:3
```

**Temperature Only:**
```yaml
type: custom:go-area-card
area: living_room
sensor_classes:
  - temperature
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Home Assistant instance for testing

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/go-hass-cards.git
cd go-hass-cards
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file:
```env
DEV_URL=http://localhost:8080
HA_URL=http://your-home-assistant-url:8123
```

### Development Commands

```bash
# Start development server
make dev
# or
pnpm dev

# Build for production
make build
# or
pnpm build

# Deploy to Home Assistant via SSH
make ssh-deploy
# or
pnpm ssh-deploy

# Generate types from Home Assistant frontend
make types
```

### Development Workflow

1. Start the development server: `pnpm dev`
2. The server will watch for changes and rebuild automatically
3. Access your Home Assistant and add the development resource:
   ```yaml
   lovelace:
     resources:
       - url: http://localhost:8080/dev-loader.js
         type: module
   ```
4. Refresh your browser to see changes

### Project Structure

```
src/
├── cards/                 # Individual card implementations
│   ├── area-card/        # Area card components
│   └── index.ts          # Card exports
├── hass-types/           # Home Assistant type definitions
├── utils/                # Shared utilities
├── dev-loader.ts         # Development loader
└── index.ts              # Main entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow TypeScript best practices
2. Use Lit decorators and reactive properties
3. Ensure mobile responsiveness
4. Add proper error handling
5. Include type definitions
6. Test on different screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Home Assistant](https://www.home-assistant.io/) for the amazing platform
- [Lit](https://lit.dev/) for the web components framework
- [HACS](https://hacs.xyz/) for making custom components easy to install

---

**Made with ❤️ for the Home Assistant community**
