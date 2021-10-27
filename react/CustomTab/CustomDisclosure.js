import React, { useEffect, useState } from 'react'
import styles from "./customTab.css"
import {
    DisclosureLayout,
    DisclosureTrigger,
    DisclosureContent,
    DisclosureStateIndicator,
    DisclosureLayoutGroup,
    DisclosureTriggerGroup
} from 'vtex.disclosure-layout'
import { genNumId } from '../Utils/Utils'


export const CustomDisclosure = ({ props }) => {

    const [maxValues, setMaxValues] = useState("one")

    const {maxVisible, arrayDisclosureLayout} = props

    useEffect(() => {
        setMaxValues(maxVisible)
    }, [maxVisible])

    const addIdTabContent = (title) => {
        let contentReplace;
        // console.log(title.length)
        title && (contentReplace = title.replace(/\s+/g, "_"));
        // console.log("contentReplace", contentReplace)
        return contentReplace
    }


    return (
        <div className={styles.WrapperDisclouser}>
            <DisclosureLayoutGroup
                maxVisible={maxValues ? maxValues : "one"}
            >
                {
                    arrayDisclosureLayout && (
                        arrayDisclosureLayout.map((arrayItems, index) => (
                            <DisclosureLayout
                                id={`DisclosureLayout_${addIdTabContent(arrayItems.tilteDisclosure)}`}
                                animated={true}
                                key={genNumId()}
                            >
                                <DisclosureTrigger
                                    as="div"
                                    id={`DisclosureTrigger_${addIdTabContent(arrayItems.tilteDisclosure)}`}     
                                >
                                    <div>
                                        {arrayItems.tilteDisclosure}
                                    </div>
                                    <div
                                        className={styles.WrapperTrigger_Icon}
                                    >

                                        <span className={styles.DisclosureTrigger_Icon}></span>
                                    </div>

                                </DisclosureTrigger>
                                <DisclosureContent
                                    id={`DisclosureContent_${addIdTabContent(arrayItems.tilteDisclosure)}`}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{ __html: arrayItems.contentDisclosure }}
                                    />
                                </DisclosureContent>
                            </DisclosureLayout>
                        ))
                    )
                }
            </DisclosureLayoutGroup>
        </div>
    )
}
