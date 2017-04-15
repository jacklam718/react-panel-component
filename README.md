## React Tabs Component

Pull request are welcomed. Please follow the Airbnb style guide [Airbnb JavaScript](https://github.com/airbnb/javascript)

#### Demo
[Storybook](https://jacklam718.github.io/react-tabs-component)

## Installation
`yarn add rt-tabs-component`

## Usage
```javascript
import Tabs from 'rt-tabs-component';
```

```javascript
const Tab = Tabs.Tab;

<Tabs
  title="Title"
  style={{}}
  tabBarStyle={{}}
  tabItemStyle={{}}
>
  <Tab label="Tab 1">
    <h3>Title This Tab 1</h3>
    <div>
      Content
    </div>
  </Tab>

  <Tab label="Tab 2">
    <h3>Title This Tab 2</h3>
    <div>
      Content
    </div>
  </Tab>

  <Tab label="Tab 3">
    <h3>Title This Tab 3</h3>
    <div>
      Content
    </div>
  </Tab>
</Tabs>
```

## Usage with sigle tab
```javascript
<Tab>
  <h3>Title</h3>
  <div>
    Content
  </div>
</Tab>
```
