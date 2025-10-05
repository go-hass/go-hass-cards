# Area Card 🏠

![Area Card Screenshot](area-card.png)

The Area Card provides a comprehensive overview of any area in your Home Assistant setup, displaying key sensors and information in a clean, organized layout. Perfect for monitoring living rooms, bedrooms, kitchens, or any defined area in your smart home.

## ✨ Features

- 🎯 **Area Overview**: Displays all sensors and devices within a specific area
- 📊 **Smart Sensor Detection**: Automatically detects and displays temperature, humidity, power consumption, and more
- 📐 **Flexible Aspect Ratios**: Customize the card dimensions to fit your dashboard layout
- 🎨 **Clean Design**: Modern, minimalist interface that integrates seamlessly with Home Assistant
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🔧 **Highly Configurable**: Extensive customization options for different use cases

## 🚀 Quick Start

Add the Area Card to your Lovelace dashboard with a simple configuration:

```yaml
type: custom:go-area-card
area: living_room
```

## ⚙️ Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `area` | string | ✅ | - | The area ID to display (e.g., `living_room`, `bedroom`, `kitchen`) |
| `aspect_ratio` | string | ❌ | `16:9` | Card aspect ratio (`16:9`, `4:3`, `1:1`, `21:9`) |
| `sensor_classes` | array | ❌ | `['temperature', 'humidity', 'power']` | Types of sensors to display |
| `top_card` | object | ❌ | - | Additional card to display at the top of the area card |
| `side_card` | object | ❌ | - | Additional card to display on the side |

## 📋 Example Configurations

### Basic Area Card
Display all default sensors for an area:

```yaml
type: custom:go-area-card
area: bedroom
```

### Custom Aspect Ratio
Perfect for wide dashboard layouts:

```yaml
type: custom:go-area-card
area: kitchen
aspect_ratio: 21:9
```

### Temperature Only
Focus on climate monitoring:

```yaml
type: custom:go-area-card
area: living_room
sensor_classes:
  - temperature
```

### Enhanced with Additional Cards
Add more context with additional cards:

```yaml
type: custom:go-area-card
area: home_office
aspect_ratio: 4:3
top_card:
  type: entities
  title: Quick Actions
  entities:
    - switch.desk_lamp
    - switch.monitor
side_card:
  type: history-graph
  title: Temperature History
  entities:
    - sensor.office_temperature
```

### Multi-Sensor Display
Show multiple sensor types:

```yaml
type: custom:go-area-card
area: garage
sensor_classes:
  - temperature
  - humidity
  - power
  - motion
  - light
```

## 🎯 Supported Sensor Classes

The Area Card can display various types of sensors:

- **Climate**: `temperature`, `humidity`
- **Energy**: `power`

## 🏗️ Area Setup

To get the most out of the Area Card, ensure your devices are properly assigned to areas in Home Assistant:

1. Go to **Settings** → **Areas & Zones**
2. Create or edit your desired area
3. Assign devices to the area
4. The Area Card will automatically detect and display relevant sensors

## 💡 Tips & Best Practices

- **Aspect Ratios**: Choose `16:9` for standard displays, `21:9` for ultrawide monitors
- **Sensor Classes**: Only include sensors you actually want to monitor to keep the card clean
- **Area Organization**: Use descriptive area names and group related devices together
- **Mobile Optimization**: The card automatically adapts to mobile screens

## 🐛 Troubleshooting

**Card not displaying sensors:**
- Verify the area ID is correct and exists in Home Assistant
- Check that devices are properly assigned to the area
- Ensure sensors are in the correct state (not unavailable)

**Layout issues:**
- Try different aspect ratios if the card doesn't fit well
- Check for CSS conflicts with other custom cards

## 🔄 Updates

Stay updated with the latest features and improvements:

- Watch the repository for new releases
- Check the [main README](../../../README.md) for changelog information
- Report issues or suggest features on GitHub

---

*Need help? Check out our [main documentation](../../../README.md) or open an issue on GitHub.*
