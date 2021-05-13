import React from 'react'
import Card from './Card'
import Image from './Image'
import card from './cardsData'
const Myprojects = () => {
 
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
                      <Image
                       src={card[0].image}
                       ratio={card[0].imageRatio} 
                       link={card[0].preview}/>
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
                      <Image 
                      src={card[1].image} 
                      ratio={card[1].imageRatio} 
                      link={card[1].preview}/>
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
                      <Image 
                      src={card[2].image} 
                      ratio={card[2].imageRatio} 
                      link={card[2].preview}/>
                    </div>
            </Card>
           
            </div>
        </div>
    )
}

export default Myprojects
