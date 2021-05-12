import React from 'react'
import Card from './Card'
import Image from './Image'
import '../../resources/Capture.PNG'
const Myprojects = () => {
  const  card =[
        {
          title: 'Sorting Algorithms Visualizer',
          description:
            'It has four sorting algorithems  Quick sort, Merge sort, Insertion sort and Bubble sort also it gives you the ability to control the speed of the visualization and the size of the data set ',
          image: 'https://www.mediafire.com/convkey/b076/g0b34zrudjjezyyzg.jpg',
          imageRatio:  1080/1920,
          preview:'https://sorting-algorithms-visualizerr.netlify.app/',
          github:'https://github.com/sharlq/sortingAlgorithmsVisualizedr'
        },
        {
          title: 'Real time chat',
          description:
            'Used nodeJs to create the backend and socket.io for real time  bidirectional data transfer',
          image: 'https://www.mediafire.com/convkey/e146/gylbhztevir54xjzg.jpg',
          imageRatio:  1080/1920,
          preview:'https://real-time-chat-app-shehab.netlify.app/',
          github:'https://github.com/sharlq/chat-app-react-nodejs-socket.io'
        },
        {
          title: 'Ecommerce',
          description:
            'in this project used CommerceJS for backend and stripe for payment and money transaction ',
          image: 'https://www.mediafire.com/convkey/6047/u3q5jcvczrg79mczg.jpg',
          imageRatio:  1080/1920,
          preview:'https://portfolio-ecommercejs.netlify.app/',
          github:'https://github.com/sharlq/React_Ecommerce'
        }]
    return (
        <div className="myProjects">
            <h4 className="myProjects-title" >My projects</h4>
            <div className="myProjects-projectsGrid">
            <div>
              <p className="myProjects-projectsGrid_title">
                Projects
              </p>
              <p className="myProjects-projectsGrid_description">
                Here is a group of my projects to show my abilites and what iam capable of doing 
              </p>
            </div>
            <Card cardStyle={{height:'200px',width:'400px'}}>
                    <div className="card-info">
                    <div className="card-title">{card[0].title}</div>
                    <div className="card-body"></div>
                    <div className="card-tail">
                    <a href={card[0].github}>Github</a>
                    <a href={card[0].preview}>Preview</a>
                    </div>
                    </div>
                    <div>
                      <Image src={card[0].image} ratio={card[0].imageRatio}></Image>
                    </div>
            </Card>
            <Card cardStyle={{height:'22vh',width:'22vw'}} >
            <div className="card-info">
                    <div className="card-title">{card[1].title}</div>
                    <div className="card-body">{card[1].description}</div>
                    <div className="card-tail">
                    <a href={card[1].github}>Github</a>
                    <a href={card[1].preview}>Preview</a>
                    </div>
                    </div>
                    <div>
                      <Image src={card[1].image} ratio={card[1].imageRatio}></Image>
                    </div>  
            </Card>
            <Card cardStyle={{height:'25vh',width:'25vw'}}>
            <div className="card-info">
                    <div className="card-title">{card[2].title}</div>
                    <div className="card-body">{card[2].description}</div>
                    <div className="card-tail">
                    <a href={card[2].github}>Github</a>
                    <a href={card[2].preview}>Preview</a>
                    </div>
                    </div>
                    <div>
                      <Image src={card[2].image} ratio={card[2].imageRatio}></Image>
                    </div>
            </Card>
           
            </div>
        </div>
    )
}

export default Myprojects
