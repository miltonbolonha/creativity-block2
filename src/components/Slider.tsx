import { useBreakpointValue } from "@chakra-ui/react";
import { useSpringCarousel } from 'react-spring-carousel'

export default function Slider({ 
    data = [], 
    loop = false,
    onChange = (active: number) => {}, 
    renderItem = (item) => null,
    initial = 0
}) {

    const disableGestures: any = useBreakpointValue({base: true, md: false})

    const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
        slideType: "fluid",
        gutter: 20,
        slideWhenThresholdIsReached: true,
        freeScroll: true,
        initialActiveItem: initial,
        disableGestures: disableGestures,
        enableFreeScrollDrag: !disableGestures,
        withLoop: loop as any,
        items: data.map((item, index) => ({
            id: 'item-' + index,
            renderItem: renderItem(item)
        })),
    } as any)

    useListenToCustomEvent((event) => {
        if (event.eventName === "onSlideChange") {
            onChange(event.slideActionType === "next" ? 1 : -1)
        }
    })

    return  <div>{carouselFragment}</div>
}

