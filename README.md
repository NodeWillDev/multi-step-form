# 👨‍💻 **multi-step-form**

<br>

# How to use

This is a simple multi-step form, I made it just for display here on my [GitHub](https://github.com/NodeWillDev/NodeWillDev)

  <br>

## Configure

> **api/typeorm/data-sources.ts**

```javascript
  type: "mysql",
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'test',
  entities: [Resume],
```
