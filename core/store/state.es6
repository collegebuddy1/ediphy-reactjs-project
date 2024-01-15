import i18n from 'i18next';

export const initialState = (config) => { return { filesUploaded: {},
    status: 'draft',
    everPublished: false,
    undoGroup: {
        present: {
            globalConfig: {
                title: undefined,
                canvasRatio: config.defaultAspectRatio || 16 / 9,
                minTimeProgress: 0,
                visorNav: {
                    player: true,
                    sidebar: true,
                    keyBindings: true,
                },
                trackProgress: true,
                age: {
                    min: 0,
                    max: 0,
                },
                context: undefined,
                rights: "public",
                keywords: [],
                typicalLearningTime: {
                    h: 0,
                    m: 0,
                    s: 0,
                },
                author: window.ediphy_editor_params && window.ediphy_editor_params.name,
                version: '1.0.0',
                thumbnail: '',
                structure: 'linear',
                difficulty: undefined,
                allowClone: true, allowDownload: true, allowComments: true,
            },
            indexSelected: 'pa-1497983247795',
            boxesById: {},
            boxSelected: -1,
            boxLevelSelected: 0,
            marksById: { },
            navItemsIds: ["pa-1497983247795"],
            navItemSelected: "pa-1497983247795",
            navItemsById: {
                "0": {
                    id: 0,
                    children: ["pa-1497983247795"],
                    boxes: [],
                    level: 0,
                    type: "",
                    hidden: false,
                },
                "pa-1497983247795": {
                    id: "pa-1497983247795",
                    isExpanded: true,
                    parent: 0,
                    linkedBoxes: {},
                    children: [],
                    boxes: [],
                    level: 1,
                    type: "slide",
                    hidden: false,
                    extraFiles: {},
                    customSize: 0,
                },
            },
            containedViewsById: {},
            containedViewSelected: 0,
            displayMode: "list",
            pluginToolbarsById: { },
            viewToolbarsById: {
                "pa-1497983247795": {
                    id: "pa-1497983247795",
                    viewName: i18n.t('slide'),
                    breadcrumb: 'hidden',
                    courseTitle: 'hidden',
                    documentSubtitle: 'hidden',
                    documentSubtitleContent: i18n.t('subtitle'),
                    documentTitle: 'expanded',
                    documentTitleContent: "",
                    numPage: 'hidden',
                    numPageContent: '',
                    background: "#ffffff",
                    backgroundAttr: "",
                    aspectRatio: "",
                },
            },
            isBusy: "",
            exercises: {
                'pa-1497983247795': {
                    id: 'pa-1497983247795',
                    submitButton: true,
                    trackProgress: false,
                    attempted: false,
                    weight: 10,
                    minForPass: 50,
                    exercises: {},
                    score: 0,
                },
            },
        } } };};