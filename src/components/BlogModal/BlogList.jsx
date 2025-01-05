
function BlogList({dataList, handleDelete}) {
  return (
    <div>
      {dataList.map(item =>(
        <div key={item.id}> 
          <p>{item.title}</p>
          <p>{item.time}</p>
          <p>{item.slug}</p>
          <p>{item.content}</p>
          <img src={item.picture} alt="" />
          <p className="cursor-pointer" onClick={() => handleDelete(item.id)}>x</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList