import { NotificationComponent } from './notification/notification.component';
import { TestComponent } from './test/test.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MapDetailComponent } from './map/map-detail/map-detail.component';
import { ProductionWfoComponent } from './information-scf/production-wfo/production-wfo.component';
import { PromotionMoneyComponent } from './information-scf/promotion-money/promotion-money.component';
import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups/sugarcane-cue-groups.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Plot', component: PlotComponent },
  { path: 'Plot/:itid/:fmname', component: PlotDetailComponent },
  { path: 'SugarcaneCueGroups', component: SugarcaneCueGroupsComponent },
  { path: 'Map', component: MapComponent },
  { path: 'MapDetail', component: MapDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'production', component: ProductionWfoComponent },
  { path: 'promotion', component: PromotionMoneyComponent },
  { path: 'test', component: TestComponent },
  { path: 'notification', component: NotificationComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
