import { Component } from '@angular/core';
import { MenuItem } from 'dist/cc-navbar';
import { User } from 'dist/cc-navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDOWEB';
  user: User = undefined;
  menu: MenuItem[] = [
    {
      innerHtml: "Gráficos",
      routerLink: "/graficos"
    },
    {
      innerHtml: "Usuários",
      routerLink: "/usuarios",
      children: [
        {
          innerHtml: "Listar Todos",
          routerLink: "/usuarios/listar-todos",
          children: []
        },
        {
          innerHtml: "Cadastrar Novo",
          routerLink: "/usuarios/cadastrar-novo",
          roles: ["ROLE_EDOWEB"],
          children: []
        }
      ]
    },
    {
      innerHtml: "Arquivos",
      routerLink: "/arquivos",
      children: [
        {
          innerHtml: "Listar Todos",
          routerLink: "/arquivos/listar-todos",
          children: []
        },
        {
          innerHtml: "Fazer Upload",
          routerLink: "/arquivos/fazer-upload",
          children: []
        }
      ]
    },
    {
      innerHtml: "Relatórios",
      routerLink: "/relatorios"
    }
  ];
  options = {
    accountUrl: "/teste"
  };

  constructor() {
    let userJson = {
      id: 8,
      username: "pedro.brito@casacivil.ce.gov.br",
      firstName: "Pedro",
      lastName: "Brito",
      groups: [
        {
          id: 2,
          name: "Opus - ALL",
          description: "Inclui todas as roles do Opus",
          groups: [],
          authorities: [
            {
              id: 29,
              description: "Opus - Cadastros",
              application: {
                id: 2,
                name: "Opus",
                path: "/opus",
                description: null
              },
              authority: "ROLE_OPUS_CADASTRO"
            },
            {
              id: 28,
              description: "Opus - Consultas",
              application: {
                id: 2,
                name: "Opus",
                path: "/opus",
                description: null
              },
              authority: "ROLE_OPUS_CONSULTA"
            }
          ]
        }
      ],
      authorities: [
        {
          id: 26,
          description: "Segurança",
          application: {
            id: 3,
            name: "Segurança",
            path: "/security",
            description: null
          },
          authority: "ROLE_SECURITY"
        },
        // {
        //   id: 66,
        //   description: "EDOWEB",
        //   application: {
        //     id: 11,
        //     name: "EDOWeb",
        //     path: "/edoweb",
        //     description: null
        //   },
        //   authority: "ROLE_EDOWEB"
        // },
        {
          id: 67,
          description: "Mapeamento",
          application: {
            id: 12,
            name: "Mapeamento",
            path: "/mapeamento",
            description: null
          },
          authority: "ROLE_MAPEAMENTO"
        }
      ],
      accountExpired: false,
      accountLocked: false,
      credentialsExpired: false,
      enabled: true,
      ldap: true
    };
    this.user = User.fromJson(userJson);
  }
}
