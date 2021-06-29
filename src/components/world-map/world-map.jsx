const Plotly = require('plotly.js/lib/core');

// Load in the trace type for choropleth
Plotly.register([
    require('plotly.js/lib/choropleth')
]);

// create plotly bundle that only has choropleth plots
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

const React = require('react');
const PropTypes = require('prop-types');

const WorldMap = props => (
    <Plot
        useResizeHandler
        className="map"
        config={
            {
                scrollZoom: false,
                displayModeBar: false,
                responsive: true
            }
        }
        data={[
            {
                type: 'choropleth',
                locationmode: 'country names',
                locations: props.countryNames,
                z: props.colorIndex,
                text: props.countryData,
                hovertemplate: '%{text}<extra></extra>',
                hoverlabel: {
                    bgcolor: '#FFF',
                    bordercolor: '#5B6671',
                    font: {
                        color: '#575E75',
                        size: '16',
                        family: "'Helvetica Neue Regular', sans-serif"
                    }
                },
                colorscale: [[0, 'rgba(14,189,140, .05)'], [1, 'rgba(14,189,140, 1)']],
                showscale: false,
                marker: {
                    line: {
                        color: '#FFFF',
                        width: .4
                    }
                }
            }
        ]}
        layout={
            {
                geo: {
                    projection: {
                        type: 'robinson',
                        scale: 1
                    },
                    showcoastlines: false,
                    showframe: false,
                    scope: 'world',
                    fitbounds: 'locations',
                    showland: true,
                    landcolor: 'rgba(14,189,140, .05)'
                },
                dragmode: false,
                margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 0,
                    pad: 0,
                    autoexpand: true
                },
                autosize: true
            }
        }
        style={{position: 'absolute', display: 'block'}}
    />
);

WorldMap.propTypes = {
    colorIndex: PropTypes.arrayOf(PropTypes.number),
    countryData: PropTypes.arrayOf(PropTypes.number),
    countryNames: PropTypes.arrayOf(PropTypes.string)
};

module.exports = WorldMap;