"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[250],{4050:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return k},metadata:function(){return o},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(7462),l=a(3366),n=(a(7294),a(3905)),s=["components"],i={slug:"tip_akkaserverless_start1",title:"[AkkaServerless] Getting Started",authors:"jay",tags:["tip","akkaserverless"]},k=void 0,o={permalink:"/blog/tip_akkaserverless_start1",source:"@site/blog/2021-10-20-akkaserverless_start/index.md",title:"[AkkaServerless] Getting Started",description:"Giter8 \uc744 \uc774\uc6a9\ud574 lightbend\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uba74 \ube60\ub974\uac8c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud558\ub2e4.",date:"2021-10-20T00:00:00.000Z",formattedDate:"2021\ub144 10\uc6d4 20\uc77c",tags:[{label:"tip",permalink:"/blog/tags/tip"},{label:"akkaserverless",permalink:"/blog/tags/akkaserverless"}],readingTime:1.635,truncated:!1,authors:[{name:"Jay Kim",title:"\ucc45\uc784 \uc5f0\uad6c\uc6d0 / ELFiNOS\ud300",url:"https://github.com/jeongwan88",imageURL:"https://github.com/andes-noh.png",key:"jay"}],nextItem:{title:"[AkkaServerless] \ud55c\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c 2\uac1c \uc774\uc0c1\uc758 API Component\ub97c \ub9cc\ub4e4 \ub54c",permalink:"/blog/tip_akkaserverless"}},p={authorsImageUrls:[void 0]},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Generate and build the Akka Serverless project",id:"generate-and-build-the-akka-serverless-project",children:[]},{value:"Package service",id:"package-service",children:[]},{value:"Run locally",id:"run-locally",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.foundweekends.org/giter8/ko/index.html"},"Giter8")," \uc744 \uc774\uc6a9\ud574 lightbend\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uba74 \ube60\ub974\uac8c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java 11 \uc774\uc0c1"),(0,n.kt)("li",{parentName:"ul"},"Docker 20.10.18 \uc774\uc0c1"),(0,n.kt)("li",{parentName:"ul"},"sbt 1.3.6 \uc774\uc0c1")),(0,n.kt)("h2",{id:"generate-and-build-the-akka-serverless-project"},"Generate and build the Akka Serverless project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Teminal\uc744 \uc5f4\uace0 \uc544\ub798 \ucee4\ub9e8\ub4dc\ub97c \uc785\ub825\ud55c\ub2e4.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," sbt new lightbend/akkaserverless-value-entity.g8\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc0c8\ub86d\uac8c \ub9cc\ub4e4\uc5b4\uc9c4 \ud504\ub85c\uc81d\ud2b8\ub85c \uc548\uc73c\ub85c \ub4e4\uc5b4\uac04\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"sbt compile")," \uba85\ub839\uc73c\ub85c \uc18c\uc2a4\ub97c \ucef4\ud30c\uc77c\ud558\uba74 .proto \ud30c\uc77c\uc744 \uae30\ubc18\uc73c\ub85c \uac1c\ubc1c\uc5d0 \ud544\uc694\ud55c class, method \ub4f1\uc774 \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4."))),(0,n.kt)("h2",{id:"package-service"},"Package service"),(0,n.kt)("p",null,"\uc774 \ud504\ub85c\uc81d\ud2b8\ub294 Aka Serverless\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 Docker \uc774\ubbf8\uc9c0\ub85c \uc11c\ube44\uc2a4\ub97c \ud328\ud0a4\uc9d5\ud558\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4."),(0,n.kt)("p",null,"\uc544\ub798 \ucee4\ub9e8\ub4dc\ub97c \uc774\uc6a9\ud574 repositoy\uc5d0 \ub3c4\ucee4 \uc544\ubbf8\uc9c0\ub97c \ubc30\ud3ec\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sbt -Ddocker.username=alice docker:publish\n")),(0,n.kt)("h2",{id:"run-locally"},"Run locally"),(0,n.kt)("p",null,"\ub85c\uceec \ud658\uacbd\uc5d0\uc11c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud574 akkaserverless proxy\ub97c \uc2dc\uc791\ud574\uc57c \ud55c\ub2e4.\n\ud504\ub85c\uc81d\ud2b8\ub0b4 docker-compose \ud30c\uc77c\uc5d0 proxy\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \ubd80\ubd84\uc774 \uc124\uc815\ub418\uc5b4 \uc788\ub2e4."),(0,n.kt)("p",null,"proxy\ub97c \uc2dc\uc791\ud558\uae30 \uc704\ud574 \uc544\ub798 \ucee4\ub9e8\ub4dc\ub97c \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc2e4\ud589\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,n.kt)("p",null,"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2dc\uc791\ud558\uae30 \uc704\ud574 \uc544\ub798 \ucee4\ub9e8\ub4dc\ub97c \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc2e4\ud589\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sbt run\n")))}d.isMDXComponent=!0}}]);