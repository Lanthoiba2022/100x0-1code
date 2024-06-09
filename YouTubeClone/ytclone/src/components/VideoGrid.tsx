import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    image: "Thumbnail-1.jpg",
    iconImage: "/Thumbnail-1.jpg",
    title: "Beautiful Places to explore in Japan", 
    views: "69M",
    timestamp: "5 days ago",
    author: "Lanthoiba"
}, {
    image: "/Thumbnail-1.jpg",
    iconImage: "/Thumbnail-1.jpg",
    title: "Beautiful Places to explore in Manipur", 
    views: "69M",
    timestamp: "5 days ago",
    author: "Lanthoiba"
}, {
    image: "/Thumbnail-1.jpg",
    iconImage: "/Thumbnail-1.jpg",
    title: "Beautiful Places to explore in Sekmai", 
    views: "69M",
    timestamp: "5 days ago",
    author: "Lanthoiba"
}, {
    image: "/Thumbnail-1.jpg",
    iconImage: "/Thumbnail-1.jpg",
    title: "Beautiful Places to explore in Moirang", 
    views: "69M",
    timestamp: "5 days ago",
    author: "Lanthoiba"
}, 
    {
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    }, {
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },{
        image: "/Thumbnail-1.jpg",
        iconImage: "/Thumbnail-1.jpg",
        title: "Beautiful Places to explore in Moirang", 
        views: "69M",
        timestamp: "5 days ago",
        author: "Lanthoiba"
    },
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> 
        {VIDEOS.map(video => <div>
                <VideoCard
                    image={video.image}
                    iconImage={video.iconImage}
                    title={video.title}
                    views={video.views}
                    timestamp={video.timestamp}
                    author={video.author}
                ></VideoCard>
        </div>)}
    </div>
}