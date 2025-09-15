"use client"
import {useEffect, useMemo, useState} from "react";

function MasonryLayout({children}) {
    const [columnCount, setColumnCount] = useState(1)
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const updateColumnCount = () => {
            if (window.innerWidth >= 1024) {
                setColumnCount(3)
                return
            }
            if (window.innerWidth >= 640) {
                setColumnCount(2)
                return
            }
            setColumnCount(1)
        }
        updateColumnCount()
        window.addEventListener('resize', updateColumnCount)
        return () => window.removeEventListener('resize', updateColumnCount)
    }, [])

    const childrenArray = useMemo(() => [...children], [children]);

    useEffect(() => {
        const newColumns = Array.from({length: columnCount}, () => [])

        childrenArray.forEach((item, index) => newColumns[index % columnCount].push(item))

        setColumns(newColumns)
    }, [columnCount])

    return (
        <div className="flex ">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col w-full md:w-1/2 lg:w-1/3 ">
                    {col.map((item, itemIndex) => (
                        <div key={itemIndex} className="mt-5">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default MasonryLayout