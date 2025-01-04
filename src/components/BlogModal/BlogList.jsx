
function BlogList({dataList}) {
  return (
    <div>
      {dataList.map(item =>(
        <div key={item.id}> 
          <p>{item.title}</p>
          <p>{item.time}</p>
          <p>{item.slug}</p>
          <img src={item.picture} alt="" />
        </div>
      ))}
    </div>
  )
}

export default BlogList