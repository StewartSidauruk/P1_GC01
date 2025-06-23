export default function MoviePreview({
    backgroundImage,
    title,
    subtitle,
    year,
    rating,
    duration,
    languages,
    description,
    genres = [],
}) {
    return (
        <section
            className="w-full h-[80vh] relative text-white flex items-center px-6 md:px-16"
            style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a14] to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
                <p className="text-blue-400 text-sm mb-3">{subtitle}</p>
                <p className="text-sm mb-4 font-medium">
                {year} &nbsp;•&nbsp; {rating} &nbsp;•&nbsp; {duration} &nbsp;•&nbsp; {languages}
                </p>
                <p className="text-sm text-gray-200 mb-4">{description}</p>
                <div className="flex flex-wrap gap-3">
                    {genres.map((genre, idx) => (
                        <span
                        key={idx}
                        className="bg-[#1f1f1f] px-3 py-1 rounded-full text-sm font-medium"
                        >
                        {genre}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
