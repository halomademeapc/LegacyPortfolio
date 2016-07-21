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
                            fill: ["rgba(229,46,41,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'youtube',
                            type: 'image',
                            rect: ['16px', '61px', '37px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"youtube.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['53px', '67px', '160px', '26px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 200; font-style: normal; text-decoration: none; font-size: 8px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 23px;\">YouTube</span></p><p></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "200", "none", "", "break-word", "normal"]
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
                    duration: 375,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${youtube}",
                            '1',
                            '1'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            375,
                            "easeInOutBack",
                            "${youtube}",
                            '61px',
                            '0px'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid5",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${youtube}",
                            '1',
                            '1'
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            375,
                            "easeInOutBack",
                            "${youtube}",
                            '37px',
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
                            "eid25",
                            "left",
                            0,
                            375,
                            "easeInOutBack",
                            "${Text}",
                            '53px',
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
                            "eid43",
                            "left",
                            0,
                            375,
                            "easeInOutBack",
                            "${youtube}",
                            '16px',
                            '0px'
                        ],
                        [
                            "eid44",
                            "height",
                            0,
                            375,
                            "linear",
                            "${Text}",
                            '26px',
                            '14px'
                        ],
                        [
                            "eid27",
                            "height",
                            0,
                            375,
                            "easeInOutBack",
                            "${youtube}",
                            '37px',
                            '160px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("youtube_edgeActions.js");
})("EDGE-8287664");
