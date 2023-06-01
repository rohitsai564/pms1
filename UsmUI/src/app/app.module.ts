import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllStocksComponent } from './all-stocks/all-stocks.component';
import {HttpClientModule} from '@angular/common/http';
import { IndustryComponent } from './industry/industry.component';
import { SymbolComponent } from './symbol/symbol.component';
import { SecurityComponent } from './security/security.component';
import { SectorComponent } from './sector/sector.component';
import { IsinNoComponent } from './isin-no/isin-no.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth1/login/login/login.component';
import { EditComponent } from './edit/edit.component';
import { ExploreComponent } from './explore/explore.component';
import { UpdateComponent } from './update/update/update.component';
import { PortfolioheaderComponent } from './portfolioheader/portfolioheader.component';
import { SecurityListComponent } from './security-list/security-list.component';
import { InvestmentThemeComponent } from './investment-theme/investment-theme.component';
import { AssetClassComponent } from './asset-class/asset-class.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { IthemeComponent } from './itheme/itheme.component';
import { AssetComponent } from './asset/asset.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllStocksComponent,
    IndustryComponent,
    SymbolComponent,
    SecurityComponent,
    SectorComponent,
    IsinNoComponent,
    MainHomeComponent,
    PublicHomeComponent,
    FooterComponent,
    LoginComponent,
    EditComponent,
    ExploreComponent,
    UpdateComponent,
    PortfolioheaderComponent,
    SecurityListComponent,
    InvestmentThemeComponent,
    AssetClassComponent,
    ViewthemeComponent,
    IthemeComponent,
    AssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
