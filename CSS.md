<h1 align="left">Flexbox</h1>

Flexbox is a **layout model** in CSS that _allows you to arrange items in a container in a **flexible** and **responsive** way_. It was _designed to solve the common problems of **alignment**, **spacing**, and **orientation** in web design_. Before flexbox, developers had to use other methods such as _floats, positioning, tables, or inline-blocks,_ which were often complex, hacky, or insufficient for modern layouts. Flexbox makes it easier to create layouts that adapt to different screen sizes and devices, without using media queries or fixed dimensions.

> **5 Rules to master CSS Flexbox.**

<h2 align="left">1. Don't talk with the children. Talk with the parent container instead.</h2>

```css
.father {
  height: 100vh;
  display: flex;
  flex-direction: row;
  /*Main Axis*/
  justify-content: space-around;
  /*Cross Axis*/
  /* align-items: center; */
}

.child {
  background: orange;
  width: 100px;
  height: 100px;
  color: white;
  margin: 5px;
}
```

```html
...
<body>
  <div class="father">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
  </div>
</body>
...
```

- When we set `display:flex` then by default, the `flex-direction:row` even if we don't mention the property.

- When the `flex-direction:row`:
  - `justify-content` controls the `main axis` i.e the `row` or `horizontal direction`
  - `align-items` controls the `cross axis` i.e the `columns` or `vertical direction`

> When the `flex-direction:column` then the role of `justify-content` and `align-items` is **`reversed`**.

```css
.father {
  height: 100vh;
  display: flex;
  flex-direction: row;
  /*Main Axis*/
  justify-content: space-around;
  /*Cross Axis*/
  /* align-items: center; */
}

.child {
  background: orange;
  width: 100px;
  height: 100px;
  color: white;
  margin: 5px;
}
```

```html
...
<body>
  <div class="father">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
  </div>
</body>
...
```

> - **align-self: center** Allows the default alignment along the cross axis to be `overridden` for individual flex items.

> - **order:0** Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.

> - **flex-wrap:nowrap** Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.

> - **align-content** Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.
