# **CSS GRID - NOTES**
---

For more complex layouts, the css Flex-box itself, cannot handle them all
For eg,


<!-- ![CSS-layout](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-track.svg) -->
<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-track.svg"
    alt="CSS-layout"
    style="display: block; margin-right: 10px; width: 300px" />


Like there are 4 \<div> tags 3 needed to be aligned at the top and one at the bottom. We need more\
extra divs to wrp the top ones that makes things more complex./
or a design like these, need to more mess around with those divs.

<img src="./images/Tutorial/css_grid2.png"
    alt="CSS-layout"
    style="display: block; margin-right: 20px; width: 300px" />


With CSS grid, in the CSS of the man container, change the `display: grid;`\
It creates a row - column layout like this,

<img src="./images/Tutorial/css_grid_row_column.png"
    alt="CSS-layout"
    style="display: block; margin-right: 20px; width: 300px" />

Specify this using `grid-template-columns: ` property, a "`grid-template-columns: 300px 300px;`", means
2 columns with width 300px each.

One can also use "percentages" and "fractions" in place of pixels to specify the column width, like
`1 fr` = all the space available,\


eg: `grid-template-columns: 300px 300px;` (for three divs)\
the first two containers takes up 300px each and the third one takes all the remaining space.\
another, `grid-template-columns: 1fr 1fr 1fr;`\


The available space equally divided in to three spaces and each div takes one space(or simply each\
div get assigned to "1/3" of total available space, that is what fractions are)\
again, in `grid-template-columns: 1fr 2fr 1fr;`\
The space distribution: - 1/4, 2/4, 1/4.

For defining the width of a row, use the `grid-template-rows: ;` property,\
Eg:
```css
main{
    display: grid;
    height: 100vh;
    /* Amount of area a column need */
    grid-template-columns: 1fr 1fr;
    /* Each row height 50vh */
    grid-template-rows: 1fr 1 fr;
}
```
<img src="./images/Tutorial/css_grid_row_column_2.png"
    alt="CSS-layout"
    style="display: block; margin-right: 20px; width: 350px" />
