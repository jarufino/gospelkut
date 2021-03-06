import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/Commons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
function ProfileSideBar(propriedades) {
  return (<Box>
            <img src={`https://github.com/${propriedades.githubUser}.png/`} style={{borderRadius:'8px'}} />
            <hr/>
            <p>
              <a className="boxLink" href="{https://github.com/${propriedades.githubUser}}">
              @{propriedades.githubUser}
              </a>
            </p>
           <hr/>
            <AlurakutProfileSidebarMenuDefault/>
        </Box>
  )
}


export default function Home() {
  const githubUser='peas';
  const pessoasFavoritas=['omariosouto', 'peas','marcobrunodev','felipefialho']
  return (
  <>
    <AlurakutMenu />
  	<MainGrid>
  		<div className="profileArea" style={{gridArea:'profileArea'}}>
	  		<ProfileSideBar githubUser={githubUser}/>
  		</div>
  		<div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
	  		<Box>
				<h1 className="title">Bem Vindo(a)</h1>
        <OrkutNostalgicIconSet />
	  		</Box>
  		</div>
	  		<div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
	  		<ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Pessoas da Comunidade({pessoasFavoritas.length})</h2>
        <ul>
          {pessoasFavoritas.map((itemAtual)=>{
				  return(
              <li>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                      </a>
              </li>
             )          
          })}
          </ul>
	  		</ProfileRelationsBoxWrapper>      
  		</div>  		
  	</MainGrid>
    </>
  	)
}
