#Treehouse Charts

jQuery function that pulls the JSON points data from your Team Treehouse profile and then uses circle.js (https://github.com/Whyounes/circle) and adds them to the DOM.

> See the demo with documentation [Demo Page](http://sacki2013.github.io/)

###Usage

 <ol>
    <li>Include jQuery (Included in js/lib (For Quick Testing))</li>
    <li>Include cirle.min.js (Included)</li>
    <li>Include the plug-in (treehouse.js)</li>
    <li>Call the plug-in (Example below)</li>
</ol>

See index.html example.

##Browser support

> The library use the `canvas` element, you can check the support on [caniuse](http://caniuse.com/#search=canvas)

##Licence

`Circle.js` is licensed under the terms of the MIT License.  
`treehouse.js` is licensed under the terms of the MIT License.


##The Code


#The HTML

```
<div id="yourname">
    <h1>yourname points: <b class="total"></b></h1>
    <div class="charts"></div>
</div>
```

#The jQuery

```
$("#yourname .charts").treehouseCharts("yourUserName", 
    {totalSelector: "#yourname .total", c1: "#b4da55", c2: "#eeeeee", 
        radiusSize: 75, exclude: ["android", "ios", "wordpress"]}
```

#Options
<ul>
    <li><code>c1</code> - Primary Color (Default: #458156)</li>
    <li><code>c1</code> - Secondary Color (Default: #494949)</li>
    <li><code>widthSize</code> - Sets the thickness of the Chart (Default: 10)</li>
    <li><code>radiusSize</code> - Sets the radius for the Chart (Default: 60)</li>
    <li><code>exclude</code> - Allows you to exlude subjects you don't take(Default: Shows All Charts)</li>
</ul>

#Contributor(s)

Andrew Chalkley @chalkers (Tidied up code and turned it into the plug-in). 
