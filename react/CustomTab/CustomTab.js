import React, { useEffect, useState } from 'react'
import { Spinner } from 'vtex.styleguide'
import { TabLayout, TabList, TabListItem, TabListItemChildren, TabContent, TabContentItem } from "vtex.tab-layout"
import { GradientCollapse } from 'vtex.store-components'
import styles from "./customTab.css"
import { useRuntime } from 'vtex.render-runtime'
import {
    DisclosureLayout,
    DisclosureTrigger,
    DisclosureContent,
    DisclosureStateIndicator,
    DisclosureLayoutGroup,
    DisclosureTriggerGroup
} from 'vtex.disclosure-layout'
import { CustomDisclosure } from './CustomDisclosure'
import { genNumId } from '../Utils/Utils'


export const CustomTab = ({ arrayTabs, titleTabsContent }) => {
    const [snipperLoad, setSnipperLoad] = useState(false)
    const [comeBakc, setComeBakc] = useState(true)
    const { deviceInfo } = useRuntime()
    // const [idTab, setIdTab] = useState()
    useEffect(() => {

        console.log("propsprops", arrayTabs)
    }, [arrayTabs])

    const addSniperLoad = () => {
        !deviceInfo.isMobile && (setSnipperLoad(true))

        setTimeout(() => {
            setSnipperLoad(false)
        }, 800);

        deviceInfo.isMobile && showContentTabMobile()

        // console.log("snipperLoad", deviceInfo)
    }

    const addIdTabContent = (title) => {
        let contentReplace;
        // console.log(title.length)
        title && (contentReplace = title.replace(/\s+/g, "_"));
        // console.log("contentReplace", contentReplace)
        return contentReplace
    }

    const comeBackMobile = () => {
        setComeBakc(true)
    }

    const showContentTabMobile = () => {
        setComeBakc(false)
    }




    return (

        <div className={`${styles.WrapperLayout}`}>

            <TabLayout
                defaultActiveTabId={deviceInfo.isMobile ? null : addIdTabContent(arrayTabs[0].tabTitle)}
            >

                <div className={`${styles.listContainer__list}`}>
                    {
                        titleTabsContent && (
                            <div className={`${styles.wrapper__list_title}`}>
                                <h1 className={`${styles.list__title}`}>{titleTabsContent}</h1>
                            </div>)
                    }

                    {
                        arrayTabs && (
                            arrayTabs.map((arrayItems, index) => (

                                <TabList key={genNumId()}>
                                    <div
                                        onClick={addSniperLoad}
                                    >
                                        <TabListItem
                                            tabId={addIdTabContent(arrayItems.tabTitle)}
                                            label={arrayItems.tabTitle}
                                        >
                                        </TabListItem>

                                    </div>

                                </TabList>
                            ))
                        )
                    }
                </div>
                <div className={`${styles.content__container}`} style={deviceInfo.isMobile && comeBakc ? { marginLeft: "100%" } : { marginLeft: "0%" }}>
                    <div
                        className={`${styles.comeBackMobile}`}
                        onClick={comeBackMobile}
                    >
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDcgMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02LjYyMTE2IDAuNTgwNTAzQzYuOTQ2NTkgMC45MDU5NCA2Ljk0NjU5IDEuNDMzNTggNi42MjExNiAxLjc1OTAxTDIuMjEwNDEgNi4xNjk3Nkw2LjYyMTE2IDEwLjU4MDVDNi45NDY1OSAxMC45MDU5IDYuOTQ2NTkgMTEuNDMzNiA2LjYyMTE2IDExLjc1OUM2LjI5NTcyIDEyLjA4NDUgNS43NjgwOCAxMi4wODQ1IDUuNDQyNjQgMTEuNzU5TDAuNDQyNjQ2IDYuNzU5MDJDMC4xMTcyMDkgNi40MzM1OCAwLjExNzIwOSA1LjkwNTk0IDAuNDQyNjQ2IDUuNTgwNUw1LjQ0MjY1IDAuNTgwNTAzQzUuNzY4MDggMC4yNTUwNjYgNi4yOTU3MiAwLjI1NTA2NiA2LjYyMTE2IDAuNTgwNTAzWiIgZmlsbD0iIzAwQTJFMiIvPgo8L3N2Zz4K" />
                        volver
                    </div>
                    {
                        arrayTabs && (
                            arrayTabs.map((arrayItems, index) => (

                                <TabContent>
                                    <TabContentItem
                                        tabId={addIdTabContent(arrayItems.tabTitle)}
                                    >
                                        {
                                            snipperLoad ? <Spinner /> : (

                                                arrayItems.content && (
                                                    arrayItems.content.additionalDef == "htmlContent" ?
                                                        (
                                                            <div
                                                                className={`${styles.wrapper__htmlContent}`}
                                                            >
                                                                {arrayItems.tilteContent && <h2 className={`${styles.titlePrincipaContent}`}>{arrayItems.tilteContent}</h2>}
                                                                <div
                                                                    // className={style.fullWidth}
                                                                    // key={index}
                                                                    dangerouslySetInnerHTML={{ __html: arrayItems.content.htmlContentId }}
                                                                />
                                                            </div>
                                                        ) :
                                                        (
                                                            <div
                                                                className={`${styles.wrapper__customDisclosure}`}
                                                            >
                                                                {arrayItems.tilteContent && <h2 className={`${styles.titlePrincipaContent}`}>{arrayItems.tilteContent}</h2>}
                                                                {/* <h1>"objectDisclosureLayoutGroup"</h1> */}
                                                                <CustomDisclosure props={arrayItems.content.objectDisclosureLayoutGroup}></CustomDisclosure>
                                                            </div>
                                                        )
                                                )
                                            )
                                        }

                                    </TabContentItem>
                                </TabContent>

                            ))
                        )
                    }
                </div>
            </TabLayout>

            <GradientCollapse
                collapseHeight={50}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </GradientCollapse>

        </div>
    )
}
CustomTab.schema =
// {
//     "title": "prueba",
//     "type": "object",
//     "dependencies": {
//         "additionalDef": {
//             "oneOf": [
//                 {
//                     "properties": {
//                         "additionalDef": {
//                             "enum": [
//                                 "category"
//                             ]
//                         },
//                         "categoryId": {
//                             "type": "string",
//                             "title": "titulo categoria",
//                             "widget": {
//                                 "ui:widget": "image-uploader",
//                             },
//                         }
//                     }
//                 },
//                 {
//                     "properties": {
//                         "additionalDef": {
//                             "enum": [
//                                 "title"
//                             ]
//                         },
//                         "title": {
//                             "type": "string",
//                             "title": "titulo title"
//                         }
//                     }
//                 },

//             ]
//         }
//     },
//     "properties": {
//         "additionalDef": {
//             "title": "admin/editor.menu.additionalDef.title",
//             "enum": [
//                 "none",
//                 "category",
//                 "title"
//             ],
//             "enumNames": [
//                 "admin/editor.menu.def.none",
//                 "admin/editor.menu.def.category",
//                 "admin/editor.menu.def.title"
//             ],
//             "widget": {
//                 "ui:widget": "radio"
//             },
//             "default": "none"
//         },
//     }
// }
{
    title: "Admin tabs custom",
    description: "administrador de tabs",
    type: "object",
    properties: {
        titleTabsContent: {
            title: "titulo del contenedor de tabs",
            type: "string"
        },
        arrayTabs: {
            title: "contenedor de tabs",
            type: "array",
            items: {
                title: "object-tabs",
                type: "object",
                properties: {
                    tabTitle: {
                        title: "titulo de la tab",
                        type: "string"
                    },
                    tilteContent: {
                        title: "Titulo del contenido",
                        type: "string"
                    },
                    content: {
                        title: "prueba",
                        type: "object",
                        dependencies: {
                            additionalDef: {
                                oneOf: [
                                    {
                                        properties: {
                                            additionalDef: {
                                                enum: [
                                                    "htmlContent"
                                                ]
                                            },
                                            htmlContentId: {
                                                type: "string",
                                                title: "Contenido HTML",
                                                //    widget: {
                                                //        "ui:widget": "image-uploader",
                                                //    },
                                            }
                                        }
                                    },
                                    {
                                        properties: {
                                            additionalDef: {
                                                enum: [
                                                    "objectDisclosureLayoutGroup"
                                                ]
                                            },
                                            objectDisclosureLayoutGroup: {
                                                title: "",
                                                type: "object",
                                                properties: {
                                                    maxVisible: {
                                                        title: "Maximos visibles",
                                                        description: "Numero maximo de disclosure-layout que se deslieqgan al mismo tiempo",
                                                        type: "string",
                                                        default: "many",
                                                        enum: [
                                                            "one",
                                                            "many"
                                                        ],
                                                    },
                                                    arrayDisclosureLayout: {
                                                        type: "array",
                                                        title: "titulo objectDisclosureLayoutGroup",
                                                        items: {
                                                            title: "object-disclosure-ayout",
                                                            type: "object",
                                                            properties: {
                                                                tilteDisclosure: {
                                                                    title: "Titulo del Disclosure",
                                                                    type: "string"
                                                                },
                                                                contentDisclosure: {
                                                                    title: "Contenedor Disclosure",
                                                                    type: "string"
                                                                },
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }
                                    },

                                ]
                            }
                        },
                        properties: {
                            additionalDef: {
                                title: "admin/editor.menu.additionalDfef.title",
                                enum: [
                                    "none",
                                    "htmlContent",
                                    "objectDisclosureLayoutGroup"
                                ],
                                enumNames: [
                                    "admin/editor.menu.def.none",
                                    "htmlContent",
                                    "objectDisclosureLayoutGroup"
                                ],
                                widget: {
                                    "ui:widget": "radio"
                                },
                                default: "none"
                            },
                        }
                    },
                }
            }
        },

    }
}