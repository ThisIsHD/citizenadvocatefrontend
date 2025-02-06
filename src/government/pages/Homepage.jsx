import React from 'react'
import { useParams } from 'react-router';
function Homepage() {
    const { gov_id } = useParams();
    console.log(gov_id);
    const [categories, setCategories] = React.useState([
        { id: 0, name: "Select" },
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
    ]);
    const [complaints, setComplaints] = React.useState([
        { id: 0, name: "Complaint 1" },
        { id: 1, name: "Complaint 2" },
        { id: 2, name: "Complaint 3" },
        { id: 3, name: "Complaint 4" },
        { id: 4, name: "Complaint 5" },
        { id: 5, name: "Complaint 6" },
        { id: 6, name: "Complaint 7" },
        { id: 7, name: "Complaint 8" },
        { id: 8, name: "Complaint 9" },
        { id: 9, name: "Complaint 10" },
    ]);
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0].name);
    return (
        <>
            <h1 className='text-3xl'>Fire Department <b className='text-xs'>Department ID: {gov_id}</b></h1>
            <p className='text-xl'>Our mission is to protect the community and prevent fires.</p>
            <p className='text-xl'>Our team is dedicated to providing the best service possible.</p>
            <select name="categories" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category, index) => (
                    index === 0
                        ? <option disabled key={category.id} value={category.name}>{category.name}</option>
                        : <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <div className=' my-8 flex flex-col gap-10'>
                <div className='bg-gray-200'>List of complaints</div>
                <div>
                    <ul className='list-disc  flex flex-col gap-3'>
                        {complaints.map((complaint, index) => (
                            <li className='bg-amber-200' key={complaint.id}>{complaint.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Homepage
