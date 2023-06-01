import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { LoginComponent } from './auth1/login/login/login.component';
import { EditComponent } from './edit/edit.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IndustryComponent } from './industry/industry.component';
import { IsinNoComponent } from './isin-no/isin-no.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PortfolioheaderComponent } from './portfolioheader/portfolioheader.component';
import { PublicHomeComponent } from './public-home/public-home.component';

import { SectorComponent } from './sector/sector.component';
import { SecurityComponent } from './security/security.component';

import { SymbolComponent } from './symbol/symbol.component';
import { UpdateComponent } from './update/update/update.component';
import { SecurityListComponent } from './security-list/security-list.component';
import { AssetClassComponent } from './asset-class/asset-class.component';
import { InvestmentThemeComponent } from './investment-theme/investment-theme.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { IthemeComponent } from './itheme/itheme.component';
import { AssetComponent } from './asset/asset.component';





const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path:'portfolio',component:SectorComponent},
  { path:'asset',component:AssetComponent},
  { path:'assetlist',component:AssetClassComponent},
  { path:'itheme',component:IthemeComponent},
  { path:'',component:MainHomeComponent,

children:[
  { path: '', component:PublicHomeComponent },
  { path:'landing',component:SectorComponent},
  // { path:'all', component:AllStocksComponent},
  // { path:'industry',component:IndustryComponent},
  { path:'portfolio',component:SectorComponent},
  { path:'security/:portfolioName/:investmentValue',component:SecurityComponent},
  { path:'securitylist',component:SecurityListComponent},
  { path:'asset',component:AssetClassComponent},
  // { path:'theme',component:InvestmentThemeComponent},
  { path:'theme',component:ViewthemeComponent},
  { path:'symbol',component:SymbolComponent},
  // { path:'isin_no',component:IsinNoComponent},
  // { path:'contact',component:FooterComponent},
  // { path:'about',component:PublicHomeComponent},
  { path:'header',component:PortfolioheaderComponent}

]
},
  { path:'ind',component:IndustryComponent},
  { path:'exp',component:ExploreComponent},

 
{ path:'all', component:AllStocksComponent},
{ path:'login', component:LoginComponent},

{ path:'f-all', component:AllStocksComponent},
{ path:'f-industry',component:IndustryComponent},
{ path:'f-sector',component:SectorComponent},
{ path:'security',component:SecurityComponent},
{ path:'symbol',component:SymbolComponent},
{ path:'f-isin_no',component:IsinNoComponent},

{ path:'edit',component:EditComponent,
children :[
 // {path:'',component:UpdateComponent}
]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AllStocksComponent]
