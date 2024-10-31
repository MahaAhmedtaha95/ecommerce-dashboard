const CategoryFilter = ({ category, setCategory }: { category: string | null; setCategory: (c: string | null) => void }) => {
    const categories = ["All", "Electronics", "Books"];

    return (
        <>
            <div className="flex items-center justify-rigth py-4">
                <span className="text-blue bg-primary-700 pr-4 font-bold">Filter by category</span>
                <select value={category || 'All'} onChange={(e) => setCategory(e.target.value === "All" ? null : e.target.value)} className="w-60 p-2 border rounded-md">
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

        </>
    );
};

export default CategoryFilter;
