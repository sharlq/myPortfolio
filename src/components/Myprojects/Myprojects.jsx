import React from 'react'
import Card from './Card'
import Image from './Image'
import '../../resources/Capture.PNG'
const Myprojects = () => {
  const  card =
        {
          title: 'Sorting Algorithms Visualized',
          description:
            'It has four sorting algorithems  Quick sort, Merge sort, Insertion sort and Bubble sort also it gives you the ability to control the speed of the visualization and the size of the data set ',
          image: 'https://www.mediafire.com/convkey/e056/tcy6eg90sscbn8qzg.jpg',
          imageRatio: 1200 / 939
        }
    return (
        <div className="myProjects">
            <h4 className="myProjects-title" >My projects</h4>
            <div className="myProjects-projectsGrid">
            <div>projects</div>
            <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
            </Card>
            <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
            </Card>
            <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
            </Card>
           
            </div>
        </div>
    )
}

export default Myprojects
