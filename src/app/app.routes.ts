import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { EmplyeeListComponent } from './components/emplyee-list/emplyee-list.component';
import { IfelseComponent } from './components/Control-flow/ifelse/ifelse.component';
import { ForComponent } from './components/Control-flow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/reactive/template/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive/reactive.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';

export const routes: Routes = [
    {
        path:'attributedirective',
        component:AttributeDirectiveComponent
    },
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    },
    {
        path:'emp-list',
        component:EmplyeeListComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
    path:'template',
    component:TemplateComponent
    },
    {
        path:'reactive',
        component:ReactiveComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },

];
