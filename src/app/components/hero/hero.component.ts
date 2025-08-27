import { Component } from '@angular/core'
import { HeroInfoModel } from '@components/hero/models/hero-info.model'

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public info: HeroInfoModel = {
    name: 'Miguel Angel Ake Us',
    title: 'Senior Software Engineer | .NET Core | Angular | Cloud Solutions | DevOps',
    description: 'Soy ingeniero de software con mas de 12 años de experiencia en desarrollo de aplicaciones empresariales robustas usando tecnologías .NET Core y Angular. He diseñado arquitecturas escalables, implementado pipelines CI/CD, creado contenedores Docker y orquestación con Kubernetes. Apasionado por la mejora continua del código, revisión de buenas prácticas y optimización de procesos DevOps. He liderado proyectos en la nube, asegurando alta disponibilidad y calidad de software',
    photoUrl: 'https://avatars.githubusercontent.com/u/16445740?v=4',
  }
}
