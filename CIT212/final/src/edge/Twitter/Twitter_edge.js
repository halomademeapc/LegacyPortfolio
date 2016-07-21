/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '160px', '160px', 'auto', 'auto'],
                            fill: ["rgba(95,169,221,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['70px', '68px', '160px', '14px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 200; font-style: normal; text-decoration: none; font-size: 8px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 20px;\">Twitter</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "200", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Symbol_12',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-34px', '0px', '160px', '160px', 'auto', 'auto'],
                            transform: [[],[],[],['0.2325','1.00188']]
                        },
                        {
                            id: 'Actions',
                            type: 'rect',
                            rect: ['0px', '0px', '160px', '160px', 'auto', 'auto'],
                            fill: ["rgba(229,46,41,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '160px', '160px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 380,
                    autoPlay: true,
                    data: [
                        [
                            "eid56",
                            "top",
                            0,
                            375,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "width",
                            375,
                            0,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            0,
                            375,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '0.2325',
                            '1'
                        ],
                        [
                            "eid63",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            375,
                            "easeInOutBack",
                            "${Text}",
                            '70px',
                            '160px'
                        ],
                        [
                            "eid33",
                            "width",
                            375,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid47",
                            "height",
                            375,
                            0,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid39",
                            "font-size",
                            0,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid51",
                            "left",
                            0,
                            375,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '-34px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            0,
                            375,
                            "easeInOutBack",
                            "${Symbol_12}",
                            '0.2325',
                            '1.00188'
                        ],
                        [
                            "eid58",
                            "height",
                            375,
                            5,
                            "easeInOutBack",
                            "${Text}",
                            '14px',
                            '31px'
                        ],
                        [
                            "eid70",
                            "right",
                            0,
                            0,
                            "easeInOutBack",
                            "${Symbol_12}",
                            'auto',
                            'auto'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'twitter',
                            type: 'image',
                            rect: ['0', '0', '160px', '160px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/twitter.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '160px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Twitter_edgeActions.js");
})("EDGE-8287664");
