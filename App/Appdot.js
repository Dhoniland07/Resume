//App.js
...
import { useState } from 'react'
...
    
function App() {
  const [allImages, setAllImages] = useState([]);
  const handleClick = async (source) => {
    const check = allImages.includes(source)
    if (check) {
      const id = allImages.indexOf(source)
        let newArr = allImages
        newArr.splice(id, 1)
          setAllImages([...newArr])
    } else {
      allImages.push(sourc)
      setAllImages([...allImages])
    }
  }

return (
    ...
  <div className="img-card" onClick={() => handleClick(data.src)}>
    ....
  {allImages.includes(data.src) ?
    <div className="img-checked" >Selected</div>
      : null}
    </div>
)
}
