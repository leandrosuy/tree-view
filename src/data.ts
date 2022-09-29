export interface FileNode {
    id: number;
    descricao: string;
    filhas: FileNode[];
}

export const root: FileNode = {
    id: 0,
    descricao: "root",
    filhas: [
        {
            id: 1,
            descricao: "Área Trânsito",
            filhas: [
                {
                    id: 2,
                    descricao: "GTA - Guia de Trânsito",
                    filhas: [
                        {
                            id: 3,
                            descricao: "e-GTA",
                            filhas: [
                                {
                                    id: 4,
                                    descricao: "Cadastrar",
                                    filhas: [
                                        {
                                            id: 5,
                                            descricao: "Pesquisar(Estabelecimentos_Origem-Destino)",
                                            filhas: []
                                        },
                                        {
                                            id: 6,
                                            descricao: "Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 7,
                                            descricao: "Imprimir Boleto",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 8,
                                    descricao: "Emitir",
                                    filhas: [
                                        {
                                            id: 9,
                                            descricao: "Pesquisar(Cadastro GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 10,
                                            descricao: "Alterar(Cadastro GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 11,
                                            descricao: "Visualizar(Cadastro_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 12,
                                            descricao: "Emitir e-GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 13,
                                            descricao: "Imprimir e-GTA",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 14,
                                    descricao: "Confirmar",
                                    filhas: [
                                        {
                                            id: 15,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 17,
                                            descricao: "Confirmar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 18,
                                    descricao: "Pesquisar/Cancelar",
                                    filhas: [
                                        {
                                            id: 19,
                                            descricao: "Pesquisar(Cadastro GTA_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 20,
                                            descricao: "Visualizar(Cadastro GTA_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 21,
                                            descricao: "Imprimir Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 22,
                                            descricao: "Imprimir e-GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 23,
                                            descricao: "Cancelar Cadastro",
                                            filhas: []
                                        },
                                        {
                                            id: 24,
                                            descricao: "Cancelar e-GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 709,
                                            descricao: "Imprimir 2ª Via GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 1113,
                                            descricao: "Visualizar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 1114,
                                            descricao: "Cancelar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 1117,
                                            descricao: "Imprimir Atestado",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 606,
                                    descricao: "Gerar Modelo B",
                                    filhas: [
                                        {
                                            id: 607,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 608,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 609,
                                            descricao: "Gerar Modelo B",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 365,
                            descricao: "GTA - Interestadual",
                            filhas: [
                                {
                                    id: 366,
                                    descricao: "Cadastrar",
                                    filhas: [
                                        {
                                            id: 367,
                                            descricao: "Pesquisar(Estabelecimentos_Origem-Destino)",
                                            filhas: []
                                        },
                                        {
                                            id: 368,
                                            descricao: "Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 369,
                                            descricao: "Imprimir Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 1973,
                                            descricao: "Preencher Manualmente",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 370,
                                    descricao: "Emitir",
                                    filhas: [
                                        {
                                            id: 371,
                                            descricao: "Pesquisar(Cadastro GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 372,
                                            descricao: "Alterar(Cadastro GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 373,
                                            descricao: "Visualizar(Cadastro_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 374,
                                            descricao: "Emitir e-GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 375,
                                            descricao: "Imprimir e-GTA",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 376,
                                    descricao: "Confirmar",
                                    filhas: [
                                        {
                                            id: 377,
                                            descricao: "Pesquisar (Propriedade_Destino)",
                                            filhas: []
                                        },
                                        {
                                            id: 378,
                                            descricao: "Confirmar",
                                            filhas: []
                                        },
                                        {
                                            id: 1815,
                                            descricao: "Confirmar fora da circunscrição do EDA",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 379,
                                    descricao: "Pesquisar/Cancelar",
                                    filhas: [
                                        {
                                            id: 380,
                                            descricao: "Pesquisar(Cadastro GTA_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 381,
                                            descricao: "Visualizar(Cadastro GTA_e-GTA)",
                                            filhas: []
                                        },
                                        {
                                            id: 382,
                                            descricao: "Imprimir Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 383,
                                            descricao: "Imprimir GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 384,
                                            descricao: "Cancelar Cadastro",
                                            filhas: []
                                        },
                                        {
                                            id: 385,
                                            descricao: "Cancelar GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 386,
                                            descricao: "Excluir GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 710,
                                            descricao: "Imprimir 2ª Via GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 1115,
                                            descricao: "Visualizar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 1116,
                                            descricao: "Cancelar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 1118,
                                            descricao: "Imprimir Atestado",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 614,
                                    descricao: "Gerar Modelo B",
                                    filhas: [
                                        {
                                            id: 615,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 616,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 617,
                                            descricao: "Gerar Modelo B",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1970,
                                    descricao: "Confirmar via PGA",
                                    filhas: [
                                        {
                                            id: 1971,
                                            descricao: "Pesquisar GTA na PGA",
                                            filhas: []
                                        },
                                        {
                                            id: 1972,
                                            descricao: "Confirmar GTA da PGA",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1110,
                            descricao: "Atestado Sanitário",
                            filhas: [
                                {
                                    id: 1111,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 1112,
                                    descricao: "Gerar Atestado",
                                    filhas: []
                                },
                                {
                                    id: 1119,
                                    descricao: "Imprimir Atestado",
                                    filhas: []
                                },
                                {
                                    id: 1120,
                                    descricao: "Imprimir Atestado (Pesquisar)",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 1783,
                            descricao: "GTA - Retorno à Origem",
                            filhas: [
                                {
                                    id: 1784,
                                    descricao: "Cadastrar GTA Retorno Origem",
                                    filhas: []
                                },
                                {
                                    id: 1785,
                                    descricao: "Emitir GTA Retorno Origem",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 25,
                    descricao: "Controles",
                    filhas: [
                        {
                            id: 26,
                            descricao: "Controle de Rebanho",
                            filhas: [
                                {
                                    id: 635,
                                    descricao: "Bovídeos e outras espécies",
                                    filhas: [
                                        {
                                            id: 27,
                                            descricao: "Pesquisar (Propriedade_A.P.)",
                                            filhas: []
                                        },
                                        {
                                            id: 28,
                                            descricao: "Atualizar Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 29,
                                            descricao: "Salvar Atualização de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 30,
                                            descricao: "Concluir Atualização de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 31,
                                            descricao: "Corrigir Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 32,
                                            descricao: "Salvar Correção de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 33,
                                            descricao: "Extrato da Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 34,
                                            descricao: "Imprimir",
                                            filhas: []
                                        },
                                        {
                                            id: 443,
                                            descricao: "Visualizar Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 619,
                                            descricao: "Estornar Saldo da Reserva de Abate",
                                            filhas: []
                                        },
                                        {
                                            id: 1935,
                                            descricao: "Estornar Saldo de Animais de Zona Livre Sem Vacinação",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 636,
                                    descricao: "Avícola",
                                    filhas: [
                                        {
                                            id: 637,
                                            descricao: "Pesquisar (Propriedade_A.P.)",
                                            filhas: []
                                        },
                                        {
                                            id: 638,
                                            descricao: "Atualizar Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 639,
                                            descricao: "Salvar Atualização de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 640,
                                            descricao: "Concluir Atualização de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 641,
                                            descricao: "Corrigir Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 642,
                                            descricao: "Salvar Correção de Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 643,
                                            descricao: "Extrato da Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 644,
                                            descricao: "Imprimir",
                                            filhas: []
                                        },
                                        {
                                            id: 645,
                                            descricao: "Visualizar Saldo",
                                            filhas: []
                                        },
                                        {
                                            id: 1240,
                                            descricao: "Gerenciar Lotes",
                                            filhas: []
                                        },
                                        {
                                            id: 1241,
                                            descricao: "Criar Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1242,
                                            descricao: "Remover Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1243,
                                            descricao: "Encerrar Ciclo do Lote",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 4000,
                                    descricao: "Permite acesso ao menu Equídeos",
                                    filhas: [
                                        {
                                            id: 4001,
                                            descricao: "Permite acesso ao menu Cadastro Individual",
                                            filhas: [
                                                {
                                                    id: 4002,
                                                    descricao: "Permite acesso ao botão Pesquisar equídeo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4003,
                                                    descricao: "Permite acesso ao botão Visualizar equídeo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4004,
                                                    descricao: "Permite acesso ao botão Editar equídeo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4005,
                                                    descricao: "Permite acesso ao botão Editar número do chip",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4006,
                                                    descricao: "Permite acesso ao botão Reidentificar equídeo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4007,
                                                    descricao: "Permite acesso ao botão Salvar equídeo",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 4008,
                                            descricao: "Permite acesso ao menu Saldo / Extrato de Equídeos",
                                            filhas: [
                                                {
                                                    id: 4009,
                                                    descricao: "Permite acesso ao botão Pesquisar Propriedade",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4010,
                                                    descricao: "Permite acesso ao botão Atualizar Saldo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4011,
                                                    descricao: "Permite acesso ao botão Salvar Atualização de Saldo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4012,
                                                    descricao: "Permite acesso ao botão Extrato da Movimentação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4013,
                                                    descricao: "Permite acesso ao botão Visualizar Saldo",
                                                    filhas: [
                                                        {
                                                            id: 4016,
                                                            descricao: "Permite acesso ao botão Visualizar equídeo",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 4017,
                                                            descricao: "Permite acesso ao botão Editar equídeo",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 4018,
                                                            descricao: "Permite acesso ao botão Editar número do chip",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 4019,
                                                            descricao: "Permite acesso ao botão Reidentificar equídeo",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 4020,
                                                            descricao: "Permite acesso ao botão Salvar equídeo",
                                                            filhas: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 4014,
                                                    descricao: "Permite acesso ao botão Corrigir Saldo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 4015,
                                                    descricao: "Permite acesso ao botão Salvar Correção de Saldo",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 35,
                            descricao: "Controle de Vacinas",
                            filhas: [
                                {
                                    id: 36,
                                    descricao: "Entrada de Vacinas",
                                    filhas: [
                                        {
                                            id: 37,
                                            descricao: "Pesquisar (revenda)",
                                            filhas: []
                                        },
                                        {
                                            id: 38,
                                            descricao: "Visualizar (nota de entrada)",
                                            filhas: []
                                        },
                                        {
                                            id: 39,
                                            descricao: "Incluir (nota de entrada)",
                                            filhas: []
                                        },
                                        {
                                            id: 40,
                                            descricao: "Incluir Produto Vacina",
                                            filhas: []
                                        },
                                        {
                                            id: 41,
                                            descricao: "Alterar Produto Vacina",
                                            filhas: []
                                        },
                                        {
                                            id: 42,
                                            descricao: "Excluir Produto Vacina",
                                            filhas: []
                                        },
                                        {
                                            id: 43,
                                            descricao: "Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 44,
                                            descricao: "Excluir (nota de entrada)",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 45,
                                    descricao: "Saída de Vacinas",
                                    filhas: [
                                        {
                                            id: 46,
                                            descricao: "Pesquisar (Revenda)",
                                            filhas: []
                                        },
                                        {
                                            id: 47,
                                            descricao: "Visualizar (Nota de Saída)",
                                            filhas: []
                                        },
                                        {
                                            id: 48,
                                            descricao: "Cadastrar Nota de Saída",
                                            filhas: []
                                        },
                                        {
                                            id: 49,
                                            descricao: "Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 50,
                                            descricao: "Estornar Nota Fiscal de Saída",
                                            filhas: []
                                        },
                                        {
                                            id: 456,
                                            descricao: "Imprimir Relatório",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 51,
                                    descricao: "Transferência de Vacinas",
                                    filhas: [
                                        {
                                            id: 52,
                                            descricao: "Visualizar (doses transferidas)",
                                            filhas: []
                                        },
                                        {
                                            id: 53,
                                            descricao: "Transferir (doses de notas de saída)",
                                            filhas: []
                                        },
                                        {
                                            id: 54,
                                            descricao: "Estornar (doses transferidas)",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 453,
                                    descricao: "Descarte de Vacinas",
                                    filhas: [
                                        {
                                            id: 454,
                                            descricao: "Descartar Vacina",
                                            filhas: []
                                        },
                                        {
                                            id: 455,
                                            descricao: "Avançar",
                                            filhas: []
                                        },
                                        {
                                            id: 769,
                                            descricao: "Histórico de Exclusão",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 55,
                            descricao: "Controle de Vacinação",
                            filhas: [
                                {
                                    id: 56,
                                    descricao: "Declaração Vacinação - Febre Aftosa",
                                    filhas: [
                                        {
                                            id: 57,
                                            descricao: "Vacinação (Etapa Vigente)",
                                            filhas: [
                                                {
                                                    id: 58,
                                                    descricao: "Registrar Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 59,
                                                    descricao: "Finalizar Declaração de Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 60,
                                                    descricao: "Imprimir Declaração de Vacinação",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 61,
                                            descricao: "Vacinação (Etapa Encerrada)",
                                            filhas: [
                                                {
                                                    id: 62,
                                                    descricao: "Registrar Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 63,
                                                    descricao: "Finalizar Declaração de Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 64,
                                                    descricao: "Imprimir Declaração de Vacinação",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 65,
                                            descricao: "Vacinação (Sem Etapas)",
                                            filhas: [
                                                {
                                                    id: 66,
                                                    descricao: "Registrar Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 67,
                                                    descricao: "Finalizar Declaração de Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 68,
                                                    descricao: "Imprimir Declaração de Vacinação",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 69,
                                    descricao: "Declaração Vacinação - Brucelose",
                                    filhas: [
                                        {
                                            id: 70,
                                            descricao: "Vacinação (Etapa Vigente)",
                                            filhas: [
                                                {
                                                    id: 71,
                                                    descricao: "Registrar Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 72,
                                                    descricao: "Finalizar Declaração de Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 73,
                                                    descricao: "Imprimir Declaração de Vacinação",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 74,
                                            descricao: "Vacinação (Etapa Encerrada)",
                                            filhas: [
                                                {
                                                    id: 75,
                                                    descricao: "Registrar Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 76,
                                                    descricao: "Finalizar Declaração de Vacinação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 77,
                                                    descricao: "Imprimir Declaração de Vacinação",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 78,
                                    descricao: "Atestado de Vacinação - Brucelose",
                                    filhas: [
                                        {
                                            id: 79,
                                            descricao: "Pesquisar (Veterinário Cadastrado)",
                                            filhas: []
                                        },
                                        {
                                            id: 81,
                                            descricao: "Imprimir Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 83,
                                            descricao: "Cadastrar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 84,
                                            descricao: "Cancelar Atestado",
                                            filhas: []
                                        },
                                        {
                                            id: 1109,
                                            descricao: "Visualizar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 85,
                                    descricao: "Pesquisar/Cancelar - Declaração",
                                    filhas: [
                                        {
                                            id: 86,
                                            descricao: "Pesquisar (Propriedade/A.P.)",
                                            filhas: []
                                        },
                                        {
                                            id: 87,
                                            descricao: "Visualizar Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 88,
                                            descricao: "Imprimir Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 89,
                                            descricao: "Confirmar Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 90,
                                            descricao: "Cancelar Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 91,
                                            descricao: "Indicar Vacinação Assistida",
                                            filhas: []
                                        },
                                        {
                                            id: 92,
                                            descricao: "Indicar Vacinação Fiscalizada",
                                            filhas: []
                                        },
                                        {
                                            id: 679,
                                            descricao: "Cancelar Declaração ADM",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1101,
                                    descricao: "Certificado de Vacinação",
                                    filhas: [
                                        {
                                            id: 1102,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1103,
                                            descricao: "Gerar Certificado Vacinação",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1244,
                                    descricao: "Declaração Vacinação Avícola",
                                    filhas: [
                                        {
                                            id: 1245,
                                            descricao: "Criar",
                                            filhas: []
                                        },
                                        {
                                            id: 1246,
                                            descricao: "Remover",
                                            filhas: []
                                        },
                                        {
                                            id: 1247,
                                            descricao: "Editar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 5020,
                                    descricao: "Atestado de Vacinação - Influenza Equina",
                                    filhas: [
                                        {
                                            id: 5021,
                                            descricao: "Permite acesso ao botão Pesquisar atestado de influenza",
                                            filhas: []
                                        },
                                        {
                                            id: 5022,
                                            descricao: "Permite acesso ao botão Cadastrar atestado de influenza",
                                            filhas: []
                                        },
                                        {
                                            id: 5023,
                                            descricao: "Permite acesso ao botão Upload de atestado de influenza",
                                            filhas: []
                                        },
                                        {
                                            id: 5024,
                                            descricao: "Permite acesso ao botão Cancelar atestado de influenza",
                                            filhas: []
                                        },
                                        {
                                            id: 5025,
                                            descricao: "Permite acesso ao botão Visualizar atestado de influenza",
                                            filhas: []
                                        },
                                        {
                                            id: 5026,
                                            descricao: "Permite acesso ao botão Imprimir atestado de influenza",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1125,
                            descricao: "CIPOA",
                            filhas: [
                                {
                                    id: 1126,
                                    descricao: "Declaração de Produção",
                                    filhas: [
                                        {
                                            id: 1127,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1128,
                                            descricao: "Visualizar Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1129,
                                            descricao: "Editar Declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1130,
                                            descricao: "Enviar para Análise",
                                            filhas: []
                                        },
                                        {
                                            id: 1131,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1132,
                                            descricao: "Editar",
                                            filhas: []
                                        },
                                        {
                                            id: 1133,
                                            descricao: "Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 1134,
                                            descricao: "Aprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1135,
                                            descricao: "Reprovar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1716,
                                    descricao: "Permite acesso ao menu Declaração Ante Post Mortem",
                                    filhas: [
                                        {
                                            id: 1717,
                                            descricao: "Permite acesso ao botão Pesquisar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1718,
                                            descricao: "Permite acesso ao botão Visualizar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1719,
                                            descricao: "Permite acesso ao botão Editar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1720,
                                            descricao: "Permite acesso ao botão Enviar análise declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1721,
                                            descricao: "Permite acesso ao botão Editar declaração GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 1722,
                                            descricao: "Permite acesso ao botão Salvar declaração GTA",
                                            filhas: []
                                        },
                                        {
                                            id: 1723,
                                            descricao: "Permite acesso ao botão Aprovar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1724,
                                            descricao: "Permite acesso ao botão Reprovar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1725,
                                            descricao: "Permite acesso ao botão Exportar declaração",
                                            filhas: []
                                        },
                                        {
                                            id: 1726,
                                            descricao: "Permite acesso ao botão Inserir data",
                                            filhas: []
                                        },
                                        {
                                            id: 1727,
                                            descricao: "Permite acesso ao botão Remover data",
                                            filhas: []
                                        },
                                        {
                                            id: 1728,
                                            descricao: "Permite acesso ao botão Inserir ocorrência",
                                            filhas: []
                                        },
                                        {
                                            id: 1729,
                                            descricao: "Permite acesso ao botão Remover ocorrência",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1743,
                                    descricao: "Permite acesso ao menu Vincular Propriedade em Laticínio",
                                    filhas: [
                                        {
                                            id: 1744,
                                            descricao: "Permite acesso ao botão Pesquisar POA",
                                            filhas: []
                                        },
                                        {
                                            id: 1745,
                                            descricao: "Permite acesso ao botão Vincular AP",
                                            filhas: []
                                        },
                                        {
                                            id: 1746,
                                            descricao: "Permite acesso ao botão Desvincular AP",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1284,
                            descricao: "Controle de Antíg. e Tuberc.",
                            filhas: [
                                {
                                    id: 1285,
                                    descricao: "Entrada de Insumos",
                                    filhas: [
                                        {
                                            id: 1333,
                                            descricao: "Interestadual",
                                            filhas: [
                                                {
                                                    id: 1334,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1335,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1336,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1337,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1338,
                                                    descricao: "Aprovar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1339,
                                                    descricao: "Reprovar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1396,
                                            descricao: "Intraestadual",
                                            filhas: [
                                                {
                                                    id: 1286,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1287,
                                                    descricao: "Excluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1288,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1399,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1289,
                                    descricao: "Descarte de Insumos",
                                    filhas: [
                                        {
                                            id: 1290,
                                            descricao: "Avançar",
                                            filhas: []
                                        },
                                        {
                                            id: 1298,
                                            descricao: "Estornar Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1400,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1401,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1299,
                                    descricao: "Requisição de Insumos",
                                    filhas: [
                                        {
                                            id: 1300,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1301,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1302,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1303,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1304,
                                            descricao: "Incluir Comprovante",
                                            filhas: []
                                        },
                                        {
                                            id: 1305,
                                            descricao: "Visualizar Comprovante",
                                            filhas: []
                                        },
                                        {
                                            id: 1306,
                                            descricao: "Visualizar Nota Fiscal",
                                            filhas: []
                                        },
                                        {
                                            id: 1307,
                                            descricao: "Gerar Segunda Via Termo Aquisição",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1310,
                                    descricao: "Saída de Insumos",
                                    filhas: [
                                        {
                                            id: 1397,
                                            descricao: "Intraestadual",
                                            filhas: [
                                                {
                                                    id: 1311,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1312,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1313,
                                                    descricao: "Visualizar Histórico de Ocorrências no Cadastro",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1314,
                                                    descricao: "Atender Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1315,
                                                    descricao: "Recusar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1332,
                                                    descricao: "Cancelar SaÃ­da",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1402,
                                                    descricao: "Incluir Saída",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1730,
                                            descricao: "Interestadual",
                                            filhas: [
                                                {
                                                    id: 1731,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1732,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1733,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1734,
                                                    descricao: "Incluir Saida",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1316,
                                    descricao: "Validação de Pag./Doação",
                                    filhas: [
                                        {
                                            id: 1317,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1318,
                                            descricao: "Visualizar Comprovante Pagamento",
                                            filhas: []
                                        },
                                        {
                                            id: 1319,
                                            descricao: "Aprovar Doação/Pagamento",
                                            filhas: []
                                        },
                                        {
                                            id: 1320,
                                            descricao: "Reprovar Doação/Pagamento",
                                            filhas: []
                                        },
                                        {
                                            id: 1321,
                                            descricao: "Visualizar Requisição",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1346,
                                    descricao: "Relatório de Utilização",
                                    filhas: [
                                        {
                                            id: 1347,
                                            descricao: "Pesquisar Relatório Gerado",
                                            filhas: []
                                        },
                                        {
                                            id: 1348,
                                            descricao: "Visualizar Dados do Relatório",
                                            filhas: []
                                        },
                                        {
                                            id: 1349,
                                            descricao: "Visualizar Histórico de Ocorrências",
                                            filhas: []
                                        },
                                        {
                                            id: 1350,
                                            descricao: "Gerar 2 ª Via",
                                            filhas: []
                                        },
                                        {
                                            id: 1351,
                                            descricao: "Gerar Relatório Mensal de Utilização de Ant. e Tub.",
                                            filhas: []
                                        },
                                        {
                                            id: 1352,
                                            descricao: "Cancelar Relatório Mensal de Utilização de Ant. e Tub.",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1385,
                            descricao: "Controle de Exames",
                            filhas: [
                                {
                                    id: 1391,
                                    descricao: "Brucelose e Tuberculose",
                                    filhas: [
                                        {
                                            id: 1324,
                                            descricao: "Atestado de Testes",
                                            filhas: [
                                                {
                                                    id: 1395,
                                                    descricao: "Interestadual",
                                                    filhas: [
                                                        {
                                                            id: 1800,
                                                            descricao: "Visualizar Atestado Interestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1801,
                                                            descricao: "Incluir Atestado Interestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1803,
                                                            descricao: "Cancelar Atestado Interestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1804,
                                                            descricao: "Reprovar Atestado Interestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1805,
                                                            descricao: "Aprovar Atestado Interestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1806,
                                                            descricao: "Gerar 2ª Via Termo de Atestado de Testes",
                                                            filhas: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 1816,
                                                    descricao: "Intraestadual",
                                                    filhas: [
                                                        {
                                                            id: 1817,
                                                            descricao: "Pesquisar",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1818,
                                                            descricao: "Incluir Atestado Intraestadual",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1819,
                                                            descricao: "Gerar 2ª Via Termo de Atestado de Testes",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1820,
                                                            descricao: "Desvincular Veterinário",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1821,
                                                            descricao: "Vincular Veterinário",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1822,
                                                            descricao: "Visualizar",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1823,
                                                            descricao: "Cancelar Atestado",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1824,
                                                            descricao: "Cancelar 1º Teste Confirmatório",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1825,
                                                            descricao: "Cancelar 2º Teste Confirmatório",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1826,
                                                            descricao: "Incluir Teste Confirmatório",
                                                            filhas: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: 1828,
                                            descricao: "Validação de Atestado",
                                            filhas: [
                                                {
                                                    id: 1829,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1830,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1831,
                                                    descricao: "Validar Atestado",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1832,
                                                    descricao: "Confirmar Validação",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1833,
                                            descricao: "Destino dos Reagentes",
                                            filhas: [
                                                {
                                                    id: 1834,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1835,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1836,
                                                    descricao: "Validar Destino dos Reagentes",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1837,
                                                    descricao: "Confirmar Validação",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 5000,
                                    descricao: "Exames de AIE e Mormo",
                                    filhas: [
                                        {
                                            id: 5001,
                                            descricao: "Permite acesso ao menu Requisição de Exames",
                                            filhas: [
                                                {
                                                    id: 5002,
                                                    descricao: "Permite acesso ao botão Pesquisar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5003,
                                                    descricao: "Permite acesso ao botão Visualizar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5004,
                                                    descricao: "Permite acesso ao botão Cancelar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5005,
                                                    descricao: "Permite acesso ao botão Cadastrar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5006,
                                                    descricao: "Permite acesso ao botão Salvar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5031,
                                                    descricao: "Permite acesso ao botão Excluir Requisição de Exame",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 5007,
                                            descricao: "Permite acesso ao menu Informação dos Resultados",
                                            filhas: [
                                                {
                                                    id: 5008,
                                                    descricao: "Permite acesso ao botão Pesquisar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5009,
                                                    descricao: "Permite acesso ao botão Visualizar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5010,
                                                    descricao: "Permite acesso ao botão Visualizar Relatório de Ensaio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5011,
                                                    descricao: "Permite acesso ao botão Assinar Relatório de Ensaio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5012,
                                                    descricao: "Permite acesso ao botão Informar Resultado",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5013,
                                                    descricao: "Permite acesso ao botão Salvar Resultado",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5027,
                                                    descricao: "Cadastrar Kits",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5028,
                                                    descricao: "Salvar Kits",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5029,
                                                    descricao: "Editar Kits",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5030,
                                                    descricao: "Excluir Kits",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5032,
                                                    descricao: "Permite acesso ao botão Excluir Resultado",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 5014,
                                            descricao: "Confirmação de Materiais Recebidos pelo Laboratório",
                                            filhas: [
                                                {
                                                    id: 5015,
                                                    descricao: "Permite acesso ao botão Pesquisar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5016,
                                                    descricao: "Permite acesso ao botão Confirmar Recebimento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5017,
                                                    descricao: "Permite acesso ao botão Receber Material",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5018,
                                                    descricao: "Permite acesso ao botão Visualizar Requisição",
                                                    filhas: []
                                                },
                                                {
                                                    id: 5019,
                                                    descricao: "Permite acesso ao botão Cancelar Requisição",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1839,
                            descricao: "Certificação Sanitária",
                            filhas: [
                                {
                                    id: 1840,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 1841,
                                    descricao: "Incluir Certificação Sanitária",
                                    filhas: []
                                },
                                {
                                    id: 1842,
                                    descricao: "Gerar 2º Via Certificado Sanitário",
                                    filhas: []
                                },
                                {
                                    id: 1843,
                                    descricao: "Alterar Certificação Sanitária",
                                    filhas: []
                                },
                                {
                                    id: 1844,
                                    descricao: "Suspender Certificação Sanitária",
                                    filhas: []
                                },
                                {
                                    id: 1845,
                                    descricao: "Ativar Certificação Sanitária",
                                    filhas: []
                                },
                                {
                                    id: 1846,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 1847,
                                    descricao: "Gerar Certificação Sanitária",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 1961,
                            descricao: "Espécies Exóticas",
                            filhas: [
                                {
                                    id: 1962,
                                    descricao: "Aut. Trans. Carcaça Javali",
                                    filhas: [
                                        {
                                            id: 1963,
                                            descricao: "Nova Autorização",
                                            filhas: []
                                        },
                                        {
                                            id: 1964,
                                            descricao: "Imprimir Autorização",
                                            filhas: []
                                        },
                                        {
                                            id: 1965,
                                            descricao: "Aprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1966,
                                            descricao: "Reprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1967,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1968,
                                            descricao: "Informar Lacres",
                                            filhas: []
                                        },
                                        {
                                            id: 1969,
                                            descricao: "Substituir",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 6000,
                            descricao: "Controle de Resenhas",
                            filhas: [
                                {
                                    id: 6001,
                                    descricao: "Consulta Resenha e Autoriza Retificadora",
                                    filhas: [
                                        {
                                            id: 6003,
                                            descricao: "Pesquisar Resenha",
                                            filhas: []
                                        },
                                        {
                                            id: 6004,
                                            descricao: "Visualizar Resenha",
                                            filhas: []
                                        },
                                        {
                                            id: 6005,
                                            descricao: "Salvar Resenha",
                                            filhas: []
                                        },
                                        {
                                            id: 6006,
                                            descricao: "Excluir Resenha",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 6002,
                                    descricao: "Consulta da Resenha Retificadora",
                                    filhas: [
                                        {
                                            id: 6007,
                                            descricao: "Pesquisar Resenha Retificadora",
                                            filhas: []
                                        },
                                        {
                                            id: 6008,
                                            descricao: "Visualizar Resenha Retificadora",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 390,
                    descricao: "Relatórios",
                    filhas: [
                        {
                            id: 391,
                            descricao: "Relatório de Brucelose",
                            filhas: [
                                {
                                    id: 1864,
                                    descricao: "Permite acesso relatório",
                                    filhas: [
                                        {
                                            id: 1865,
                                            descricao: "Permite gerar relatório Estoque",
                                            filhas: []
                                        },
                                        {
                                            id: 1866,
                                            descricao: "Permite gerar relatório Requisições",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1868,
                                    descricao: "Permite gerar relatório Locais",
                                    filhas: []
                                },
                                {
                                    id: 1873,
                                    descricao: "Menu Vacinação Brucelose",
                                    filhas: [
                                        {
                                            id: 394,
                                            descricao: "Acompanhamento",
                                            filhas: [
                                                {
                                                    id: 401,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 402,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 395,
                                            descricao: "Fechamento",
                                            filhas: [
                                                {
                                                    id: 403,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 404,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1874,
                                    descricao: "Menu Exames de Brucelose e Tuberculose",
                                    filhas: [
                                        {
                                            id: 1867,
                                            descricao: "Permite gerar relatório Exames",
                                            filhas: []
                                        },
                                        {
                                            id: 1871,
                                            descricao: "Permite gerar relatório Animais Exist.vs Animais Test.",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 392,
                            descricao: "Relatório de Aftosa",
                            filhas: [
                                {
                                    id: 396,
                                    descricao: "Acompanhamento",
                                    filhas: [
                                        {
                                            id: 405,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 406,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 397,
                                    descricao: "Fechamento",
                                    filhas: [
                                        {
                                            id: 407,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 408,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 393,
                            descricao: "Relatório de GTA",
                            filhas: [
                                {
                                    id: 1293,
                                    descricao: "Relatório de GTA",
                                    filhas: [
                                        {
                                            id: 399,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 400,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 618,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1294,
                                    descricao: "Consolidado de GTA",
                                    filhas: [
                                        {
                                            id: 1295,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 707,
                            descricao: "GIS",
                            filhas: [
                                {
                                    id: 708,
                                    descricao: "Gerar CSV",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 1308,
                            descricao: "Permite acesso ao menu Alteração de Saldo",
                            filhas: []
                        },
                        {
                            id: 1322,
                            descricao: "Produtor/Rebanho",
                            filhas: [
                                {
                                    id: 1323,
                                    descricao: "Gerar XLS",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 1747,
                            descricao: "Permite acesso ao menu CIPOA",
                            filhas: [
                                {
                                    id: 1748,
                                    descricao: "Permite acesso ao menu Relatório de Produção",
                                    filhas: [
                                        {
                                            id: 1749,
                                            descricao: "Permite acesso ao botão Exportar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1750,
                                    descricao: "Permite acesso ao menu Relatório Ante Post Mortem",
                                    filhas: [
                                        {
                                            id: 1751,
                                            descricao: "Permite acesso ao botão Exportar CSV",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1863,
                            descricao: "Permite gerar relatório ref medicos",
                            filhas: []
                        },
                        {
                            id: 1869,
                            descricao: "Permite gerar relatório Certificação Sanitária",
                            filhas: []
                        },
                        {
                            id: 1870,
                            descricao: "Permite gerar relatório Auditoria Méd. Vet. PECEBT/SP",
                            filhas: []
                        },
                        {
                            id: 1926,
                            descricao: "Permite acesso ao menu Relatório de Eventos Agropecuários",
                            filhas: []
                        }
                    ]
                },
                {
                    id: 1877,
                    descricao: "Requerimentos",
                    filhas: [
                        {
                            id: 1892,
                            descricao: "Permite acesso ao menu Eventos Concentração Animal",
                            filhas: [
                                {
                                    id: 1893,
                                    descricao: "Permite acesso ao menu Solicitação de Evento",
                                    filhas: [
                                        {
                                            id: 1894,
                                            descricao: "Permite acesso ao botão Pesquisar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1895,
                                            descricao: "Permite acesso ao botão Cadastrar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1896,
                                            descricao: "Permite acesso ao botão Salvar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1897,
                                            descricao: "Permite acesso ao botão Visualizar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1898,
                                            descricao: "Permite acesso ao botão Alterar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1899,
                                            descricao: "Permite acesso ao botão Cancelar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1900,
                                            descricao: "Permite acesso ao botão Enviar Para Analise Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1901,
                                            descricao: "Permite acesso ao botão Aprovar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1902,
                                            descricao: "Permite acesso ao botão Reprovar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1903,
                                            descricao: "Permite acesso ao botão Validar Vínculo",
                                            filhas: []
                                        },
                                        {
                                            id: 1904,
                                            descricao: "Permite acesso ao botão Imprimir Termo Autorização",
                                            filhas: []
                                        },
                                        {
                                            id: 1905,
                                            descricao: "Permite acesso ao botão Incluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 1906,
                                            descricao: "Permite acesso ao botão Excluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 1907,
                                            descricao: "Permite acesso ao botão Incluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 1908,
                                            descricao: "Permite acesso ao botão Excluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 1909,
                                            descricao: "Permite acesso ao botão Pesquisar Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 1910,
                                            descricao: "Permite acesso ao botão Vincular Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 1911,
                                            descricao: "Permite acesso ao botão Excluir Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 1912,
                                            descricao: "Permite acesso ao botão Pesquisar RT",
                                            filhas: []
                                        },
                                        {
                                            id: 1913,
                                            descricao: "Permite acesso ao botão Vincular RT",
                                            filhas: []
                                        },
                                        {
                                            id: 1914,
                                            descricao: "Permite acesso ao botão Exclusao RT",
                                            filhas: []
                                        },
                                        {
                                            id: 1915,
                                            descricao: "Permite acesso ao botão Aprovar Vínculo RT",
                                            filhas: []
                                        },
                                        {
                                            id: 1916,
                                            descricao: "Permite acesso ao botão Reprovar Vínculo RT",
                                            filhas: []
                                        },
                                        {
                                            id: 1917,
                                            descricao: "Permite acesso ao botão Visualizar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1918,
                                            descricao: "Permite acesso ao botão Aprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1919,
                                            descricao: "Permite acesso ao botão Reprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1920,
                                            descricao: "Permite acesso ao botão Cancelar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1921,
                                            descricao: "Permite acesso ao botão Excluir Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1922,
                                            descricao: "Permite acesso ao botão Aprovar Evento",
                                            filhas: []
                                        },
                                        {
                                            id: 1923,
                                            descricao: "Permite acesso ao botão Reprovar Evento",
                                            filhas: []
                                        },
                                        {
                                            id: 1924,
                                            descricao: "Permite acesso ao botão Visualizar Relatório do Evento",
                                            filhas: []
                                        },
                                        {
                                            id: 1925,
                                            descricao: "Permite acesso ao botão Finalizar Evento",
                                            filhas: []
                                        },
                                        {
                                            id: 1929,
                                            descricao: "Permite exportar requerimento de autorização do evento",
                                            filhas: []
                                        },
                                        {
                                            id: 1933,
                                            descricao: "Permite acesso ao botão Excluir Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 1934,
                                            descricao: "Permite acesso ao botão Suspender Solicitação",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1975,
                            descricao: "Certificação Sanitária",
                            filhas: [
                                {
                                    id: 1878,
                                    descricao: "Pesquisar Requerimentos",
                                    filhas: []
                                },
                                {
                                    id: 1879,
                                    descricao: "Incluir Requerimentos",
                                    filhas: []
                                },
                                {
                                    id: 1880,
                                    descricao: "Visualizar Requerimentos",
                                    filhas: []
                                },
                                {
                                    id: 1881,
                                    descricao: "Cancelar Requerimentos",
                                    filhas: []
                                },
                                {
                                    id: 1882,
                                    descricao: "Deferir Requerimentos",
                                    filhas: []
                                },
                                {
                                    id: 1883,
                                    descricao: "Indeferir Requerimentos",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 93,
            descricao: "Área Vegetal",
            filhas: [
                {
                    id: 94,
                    descricao: "Controles",
                    filhas: [
                        {
                            id: 95,
                            descricao: "Controle CFOs",
                            filhas: [
                                {
                                    id: 96,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 97,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 98,
                                    descricao: "Imprimir",
                                    filhas: []
                                },
                                {
                                    id: 99,
                                    descricao: "Cancelar Certificado",
                                    filhas: []
                                },
                                {
                                    id: 534,
                                    descricao: "Incluir CFO",
                                    filhas: []
                                },
                                {
                                    id: 535,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 536,
                                    descricao: "Ativar",
                                    filhas: []
                                },
                                {
                                    id: 537,
                                    descricao: "Reprovar",
                                    filhas: []
                                },
                                {
                                    id: 538,
                                    descricao: "Cancelar",
                                    filhas: []
                                },
                                {
                                    id: 539,
                                    descricao: "Excluir",
                                    filhas: []
                                },
                                {
                                    id: 540,
                                    descricao: "CFO - Produto - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 541,
                                    descricao: "CFO - Produto - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 542,
                                    descricao: "CFO - Laudo Laboratorial - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 543,
                                    descricao: "CFO - Laudo Laboratorial - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 544,
                                    descricao: "CFO - Declaração Adicional - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 545,
                                    descricao: "CFO - Declaração Adicional - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 546,
                                    descricao: "CFO - Tratamento Fitossanitario - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 547,
                                    descricao: "CFO - Tratamento Fitossanitario - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 611,
                                    descricao: "Estornar Saldo CFO",
                                    filhas: []
                                },
                                {
                                    id: 1426,
                                    descricao: "Permite acesso ao botão aceitar explante",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 100,
                            descricao: "Controle CFOCs",
                            filhas: [
                                {
                                    id: 101,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 102,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 103,
                                    descricao: "Imprimir",
                                    filhas: []
                                },
                                {
                                    id: 104,
                                    descricao: "Cancelar Certificado",
                                    filhas: []
                                },
                                {
                                    id: 521,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 522,
                                    descricao: "Ativar",
                                    filhas: []
                                },
                                {
                                    id: 523,
                                    descricao: "Reprovar",
                                    filhas: []
                                },
                                {
                                    id: 524,
                                    descricao: "Informações complementares - Alterar",
                                    filhas: []
                                },
                                {
                                    id: 525,
                                    descricao: "Lote - Vincular",
                                    filhas: []
                                },
                                {
                                    id: 526,
                                    descricao: "Lote - Desvincular",
                                    filhas: []
                                },
                                {
                                    id: 527,
                                    descricao: "Laudo Laboratorial - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 528,
                                    descricao: "Laudo Laboratorial - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 529,
                                    descricao: "Declaração Adicional - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 530,
                                    descricao: "Declaração Adicional - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 531,
                                    descricao: "Tratamento Fitossanitario com fins quarentanarios - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 532,
                                    descricao: "Tratamento Fitossanitario com fins quarentanarios - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 533,
                                    descricao: "Confirmar Emissão",
                                    filhas: []
                                },
                                {
                                    id: 604,
                                    descricao: "Incluir CFOc",
                                    filhas: []
                                },
                                {
                                    id: 605,
                                    descricao: "Excluir",
                                    filhas: []
                                },
                                {
                                    id: 612,
                                    descricao: "Estornar Saldo CFOC",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 548,
                            descricao: "Documento Externo",
                            filhas: [
                                {
                                    id: 549,
                                    descricao: "Incluir Documento Externo",
                                    filhas: []
                                },
                                {
                                    id: 550,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 551,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 552,
                                    descricao: "Ativar",
                                    filhas: []
                                },
                                {
                                    id: 553,
                                    descricao: "Reprovar",
                                    filhas: []
                                },
                                {
                                    id: 554,
                                    descricao: "Cancelar",
                                    filhas: []
                                },
                                {
                                    id: 555,
                                    descricao: "Excluir",
                                    filhas: []
                                },
                                {
                                    id: 556,
                                    descricao: "Produto Incluir",
                                    filhas: []
                                },
                                {
                                    id: 557,
                                    descricao: "Produto Alterar",
                                    filhas: []
                                },
                                {
                                    id: 558,
                                    descricao: "Produto Excluir",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 559,
                            descricao: "Lotes CFOCs",
                            filhas: [
                                {
                                    id: 560,
                                    descricao: "Incluir Lotes",
                                    filhas: []
                                },
                                {
                                    id: 561,
                                    descricao: "Incluir Produto",
                                    filhas: []
                                },
                                {
                                    id: 562,
                                    descricao: "Excluir Produto",
                                    filhas: []
                                },
                                {
                                    id: 563,
                                    descricao: "Consolidar Lote",
                                    filhas: []
                                },
                                {
                                    id: 632,
                                    descricao: "Cancelar Lote",
                                    filhas: []
                                },
                                {
                                    id: 633,
                                    descricao: "Alterar Lote",
                                    filhas: []
                                },
                                {
                                    id: 634,
                                    descricao: "Excluir Lote",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 598,
                            descricao: "Laudo Laboratorial",
                            filhas: [
                                {
                                    id: 599,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 600,
                                    descricao: "Cancelar",
                                    filhas: []
                                },
                                {
                                    id: 601,
                                    descricao: "Excluir",
                                    filhas: []
                                },
                                {
                                    id: 602,
                                    descricao: "Vincular Produto",
                                    filhas: []
                                },
                                {
                                    id: 603,
                                    descricao: "Desvincular Produto",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 797,
                            descricao: "Cancro Cítrico e Greening",
                            filhas: [
                                {
                                    id: 798,
                                    descricao: "Posição das Inspeções",
                                    filhas: [
                                        {
                                            id: 799,
                                            descricao: "Declarar Inspeção para UPs (talhões) de Citros",
                                            filhas: []
                                        },
                                        {
                                            id: 800,
                                            descricao: "Visualizar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 801,
                                            descricao: "Declarar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 802,
                                            descricao: "Adicionar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 803,
                                            descricao: "Salvar Rascunho",
                                            filhas: []
                                        },
                                        {
                                            id: 804,
                                            descricao: "Salvar para Entregar",
                                            filhas: []
                                        },
                                        {
                                            id: 805,
                                            descricao: "Entregar Relatório para a CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 806,
                                            descricao: "Entregar Relatório para a CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 807,
                                            descricao: "Visualizar Entrega",
                                            filhas: []
                                        },
                                        {
                                            id: 808,
                                            descricao: "Emitir 2ª via de protocolo",
                                            filhas: []
                                        },
                                        {
                                            id: 823,
                                            descricao: "Pesquisar posição do produtor (EDA)",
                                            filhas: []
                                        },
                                        {
                                            id: 1124,
                                            descricao: "Migrar histórico para Gedave",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 809,
                                    descricao: "Solicitação Atualização Saldo",
                                    filhas: [
                                        {
                                            id: 810,
                                            descricao: "Incluir Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 811,
                                            descricao: "Visualizar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 812,
                                            descricao: "Enviar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 813,
                                            descricao: "Autorizar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 814,
                                            descricao: "Reprovar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 815,
                                            descricao: "Cancelar Solicitação",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 816,
                                    descricao: "Solicitação Retificação",
                                    filhas: [
                                        {
                                            id: 817,
                                            descricao: "Incluir Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 818,
                                            descricao: "Visualizar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 819,
                                            descricao: "Enviar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 820,
                                            descricao: "Autorizar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 821,
                                            descricao: "Reprovar Solicitação",
                                            filhas: []
                                        },
                                        {
                                            id: 822,
                                            descricao: "Cancelar Solicitação",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 824,
                                    descricao: "Situação Entrega Relatório",
                                    filhas: [
                                        {
                                            id: 825,
                                            descricao: "Consolidado por AP",
                                            filhas: []
                                        },
                                        {
                                            id: 826,
                                            descricao: "Consolidado por Dia/Hora",
                                            filhas: [
                                                {
                                                    id: 827,
                                                    descricao: "Relatórios Entregues Consolidados por Hora",
                                                    filhas: []
                                                },
                                                {
                                                    id: 828,
                                                    descricao: "Detalhe dos Relatórios Entregues",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 829,
                                            descricao: "Consolidado por EDA",
                                            filhas: []
                                        },
                                        {
                                            id: 830,
                                            descricao: "Consolidado por EDA/Mun.",
                                            filhas: []
                                        },
                                        {
                                            id: 831,
                                            descricao: "Entre Sem. 2º/2009 e 1º/2011",
                                            filhas: [
                                                {
                                                    id: 832,
                                                    descricao: "Detalhe",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1151,
                            descricao: "Permite acesso ao menu de Controle de Agrotóxicos",
                            filhas: [
                                {
                                    id: 1152,
                                    descricao: "Permite acesso ao menu Nota Fiscal de Entrada",
                                    filhas: [
                                        {
                                            id: 1153,
                                            descricao: "Permite acesso ao botão pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1154,
                                            descricao: "Permite acesso ao botão visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1155,
                                            descricao: "Permite acesso ao botão incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1156,
                                            descricao: "Permite acesso ao botão incluir produto",
                                            filhas: []
                                        },
                                        {
                                            id: 1157,
                                            descricao: "Permite acesso ao botão alterar produto",
                                            filhas: []
                                        },
                                        {
                                            id: 1158,
                                            descricao: "Permite acesso ao botão excluir produto",
                                            filhas: []
                                        },
                                        {
                                            id: 1159,
                                            descricao: "Permite acesso ao botão salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 1160,
                                            descricao: "Permite acesso ao botão excluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1161,
                                    descricao: "Permite acesso ao menu Nota Fiscal de Saída",
                                    filhas: [
                                        {
                                            id: 1162,
                                            descricao: "Permite acesso ao botão pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1163,
                                            descricao: "Permite acesso ao botão visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1164,
                                            descricao: "Permite acesso ao botão cadastrar",
                                            filhas: []
                                        },
                                        {
                                            id: 1165,
                                            descricao: "Permite acesso ao botão salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 1166,
                                            descricao: "Permite acesso ao botão estornar",
                                            filhas: []
                                        },
                                        {
                                            id: 1167,
                                            descricao: "Permite acesso ao botão imprimir relatório",
                                            filhas: []
                                        },
                                        {
                                            id: 1168,
                                            descricao: "Permite acesso ao botão imprimir receituário",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1169,
                                    descricao: "Permite acesso ao menu Receituário Agronômico",
                                    filhas: [
                                        {
                                            id: 1170,
                                            descricao: "Permite acesso ao botão pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1171,
                                            descricao: "Permite acesso ao botão visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1172,
                                            descricao: "Permite acesso ao botão incluir receituário",
                                            filhas: []
                                        },
                                        {
                                            id: 1173,
                                            descricao: "Permite acesso ao botão imprimir",
                                            filhas: []
                                        },
                                        {
                                            id: 1174,
                                            descricao: "Permite acesso ao botão incluir recomendação técnica",
                                            filhas: []
                                        },
                                        {
                                            id: 1175,
                                            descricao: "Permite acesso ao botão alterar recomendação técnica",
                                            filhas: []
                                        },
                                        {
                                            id: 1176,
                                            descricao: "Permite acesso ao botão remover recomendação técnica",
                                            filhas: []
                                        },
                                        {
                                            id: 1177,
                                            descricao: "Permite acesso ao botão salvar receituário",
                                            filhas: []
                                        },
                                        {
                                            id: 1178,
                                            descricao: "Permite acesso ao botão cancelar receituário",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1179,
                                    descricao: "Permite acesso ao menu Uso",
                                    filhas: [
                                        {
                                            id: 1180,
                                            descricao: "Permite acesso ao botão Pesquisar Uso",
                                            filhas: []
                                        },
                                        {
                                            id: 1181,
                                            descricao: "Permite acesso ao botão Visualizar Uso",
                                            filhas: []
                                        },
                                        {
                                            id: 1182,
                                            descricao: "Permite acesso ao botão Cancelar Uso",
                                            filhas: []
                                        },
                                        {
                                            id: 1183,
                                            descricao: "Permite acesso ao botão Incluir uso",
                                            filhas: []
                                        },
                                        {
                                            id: 1184,
                                            descricao: "Permite acesso ao botão Salvar Uso",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1185,
                                    descricao: "Permite acesso ao menu Descarte",
                                    filhas: [
                                        {
                                            id: 1186,
                                            descricao: "Permite acesso ao botão Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1187,
                                            descricao: "Permite acesso ao botão Incluir Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1188,
                                            descricao: "Permite acesso ao botão Visualizar Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1189,
                                            descricao: "Permite acesso ao botão Notificar Fabricante",
                                            filhas: []
                                        },
                                        {
                                            id: 1190,
                                            descricao: "Permite acesso ao botão Cancelar Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1191,
                                            descricao: "Permite acesso ao botão Aprovar Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1192,
                                            descricao: "Permite acesso ao botão Reprovar Descarte",
                                            filhas: []
                                        },
                                        {
                                            id: 1193,
                                            descricao: "Permite acesso ao botão Salvar Descarte",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1194,
                                    descricao: "Permite acesso ao menu Devolução",
                                    filhas: [
                                        {
                                            id: 1195,
                                            descricao: "Permite acesso ao botão Pesquisar Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1196,
                                            descricao: "Permite acesso ao botão Incluir Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1197,
                                            descricao: "Permite acesso ao botão Visualizar Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1198,
                                            descricao: "Permite acesso ao botão Gerar Recibo",
                                            filhas: []
                                        },
                                        {
                                            id: 1199,
                                            descricao: "Permite acesso ao botão Cancelar Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1200,
                                            descricao: "Permite acesso ao botão Aprovar Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1201,
                                            descricao: "Permite acesso ao botão Reprovar Devolução",
                                            filhas: []
                                        },
                                        {
                                            id: 1202,
                                            descricao: "Permite acesso ao botão Salvar Devolução",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1203,
                                    descricao: "Permite acesso ao menu Devolução Avulsa",
                                    filhas: [
                                        {
                                            id: 1204,
                                            descricao: "Permite acesso ao botão Pesquisar Devolução Avulsa",
                                            filhas: []
                                        },
                                        {
                                            id: 1205,
                                            descricao: "Permite acesso ao botão Incluir Devolução Avulsa",
                                            filhas: []
                                        },
                                        {
                                            id: 1206,
                                            descricao: "Permite acesso ao botão Incluir Item",
                                            filhas: []
                                        },
                                        {
                                            id: 1207,
                                            descricao: "Permite acesso ao botão Excluir Item",
                                            filhas: []
                                        },
                                        {
                                            id: 1208,
                                            descricao: "Permite acesso ao botão Visualizar Devolução Avulsa",
                                            filhas: []
                                        },
                                        {
                                            id: 1209,
                                            descricao: "Permite acesso ao botão Aprovar Devolução Avulsa",
                                            filhas: []
                                        },
                                        {
                                            id: 1210,
                                            descricao: "Permite acesso ao botão Reprovar Devolução Avulsa",
                                            filhas: []
                                        },
                                        {
                                            id: 1211,
                                            descricao: "Permite acesso ao botão Salvar Devolução Avulsa",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1212,
                                    descricao: "Permite acesso ao menu Bloqueio / Desbloqueio",
                                    filhas: [
                                        {
                                            id: 1213,
                                            descricao: "Permite acesso ao botão Pesquisar Bloqueio",
                                            filhas: []
                                        },
                                        {
                                            id: 1214,
                                            descricao: "Permite acesso ao botão Incluir Bloqueio",
                                            filhas: []
                                        },
                                        {
                                            id: 1215,
                                            descricao: "Permite acesso ao botão Imprimir Bloqueio",
                                            filhas: []
                                        },
                                        {
                                            id: 1216,
                                            descricao: "Permite acesso ao botão Visualizar Bloqueio",
                                            filhas: []
                                        },
                                        {
                                            id: 1217,
                                            descricao: "Permite acesso ao botão Desbloquear Bloqueio",
                                            filhas: []
                                        },
                                        {
                                            id: 1218,
                                            descricao: "Permite acesso ao botão Salvar Bloqueio",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1427,
                            descricao: "Permite acesso ao menu de Controle de Viveiros",
                            filhas: [
                                {
                                    id: 1428,
                                    descricao: "Permite acesso ao menu de Planos de Produção de Mudas",
                                    filhas: [
                                        {
                                            id: 1429,
                                            descricao: "Permite acesso ao menu Gestão de Planos de Produção",
                                            filhas: [
                                                {
                                                    id: 1430,
                                                    descricao: "Permite acesso ao botão Acessar Plano AP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1431,
                                                    descricao: "Permite acesso ao botão Pesquisar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1432,
                                                    descricao: "Permite acesso ao botão Visualizar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1433,
                                                    descricao: "Permite acesso ao botão Incluir Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1434,
                                                    descricao: "Permite acesso ao botão Informar Semeadura/Transp./Enxertia",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1435,
                                                    descricao: "Permite acesso ao botão Encerrar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1436,
                                                    descricao: "Permite acesso ao botão Imprimir Relatório Final",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1437,
                                                    descricao: "Permite acesso ao botão Operação Semeadura",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1438,
                                                    descricao: "Permite acesso ao botão Operação Transplantio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1439,
                                                    descricao: "Permite acesso ao botão Operação Enxertia",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1440,
                                                    descricao: "Permite acesso ao botão Estornar Produto Cesta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1441,
                                                    descricao: "Permite acesso ao botão Cancelar Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1442,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1443,
                                                    descricao: "Permite acesso ao botão Cancelar Op. a Gravar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1444,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. a Gravar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1445,
                                                    descricao: "Permite acesso ao botão Salvar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1446,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1447,
                                                    descricao: "Permite acesso ao botão Imprimir Etiqueta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1448,
                                                    descricao: "Permite acesso ao botão Incluir Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1449,
                                                    descricao: "Permite acesso ao botão Visualizar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1450,
                                                    descricao: "Permite acesso ao botão Cancelar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1451,
                                                    descricao: "Permite acesso ao botão Aprovar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1452,
                                                    descricao: "Permite acesso ao botão Reprovar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1453,
                                                    descricao: "Permite acesso ao botão Imprimir Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1454,
                                                    descricao: "Permite acesso ao botão Iniciar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1455,
                                                    descricao: "Permite acesso ao botão Editar/Finalizar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1456,
                                                    descricao: "Permite acesso ao botão Visualizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1457,
                                                    descricao: "Permite acesso ao botão Informar Resultados Laboratoriais",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1458,
                                                    descricao: "Permite acesso ao botão Informar Vistoria CDA/Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1459,
                                                    descricao: "Permite acesso ao botão Aprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1460,
                                                    descricao: "Permite acesso ao botão Reprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1461,
                                                    descricao: "Permite acesso ao botão Cancelar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1462,
                                                    descricao: "Permite acesso ao botão Imprimir Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1463,
                                                    descricao: "Permite acesso ao botão Incluir Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1464,
                                                    descricao: "Permite acesso ao botão Editar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1465,
                                                    descricao: "Permite acesso ao botão Cancelar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1466,
                                                    descricao: "Permite acesso ao botão Informar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1467,
                                                    descricao: "Permite acesso ao botão Visualizar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1468,
                                                    descricao: "Permite acesso ao botão Incluir Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1469,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1470,
                                                    descricao: "Permite acesso ao botão Aprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1471,
                                                    descricao: "Permite acesso ao botão Reprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1472,
                                                    descricao: "Permite acesso ao botão Solicitar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1473,
                                                    descricao: "Permite acesso ao botão Salvar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1474,
                                                    descricao: "Permite acesso ao botão Finalizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1475,
                                                    descricao: "Permite acesso ao botão Imprimir Laudo Liberação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1476,
                                                    descricao: "Permite acesso ao botão Gerar DARE",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1477,
                                                    descricao: "Permite acesso ao botão Imprimir Certificado Prod/Formação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1478,
                                                    descricao: "Permite acesso ao botão Criar UP/Safras Recertificadas",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1479,
                                                    descricao: "Permite acesso ao botão Imprimir Ficha Inscrição UP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1480,
                                                    descricao: "Permite acesso ao botão Recertificar/Reembalar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1481,
                                                    descricao: "Permite acesso ao botão Visualizar Informar Ocorrência",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1482,
                                            descricao: "Permite acesso ao menu Aceite de Produtos (CFO/PTV)",
                                            filhas: [
                                                {
                                                    id: 1483,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1484,
                                                    descricao: "Permite acesso ao botão Aceitar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1485,
                                                    descricao: "Permite acesso ao botão Estornar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1486,
                                            descricao: "Permite acesso ao menu Controle CFOs Explante de Viveiro",
                                            filhas: []
                                        },
                                        {
                                            id: 1487,
                                            descricao: "Permite acesso ao menu Alocação de Insumos em Estufas",
                                            filhas: [
                                                {
                                                    id: 1488,
                                                    descricao: "Permite acesso ao botão Alocar Insumo",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1489,
                                            descricao: "Permite acesso ao menu Descarte",
                                            filhas: [
                                                {
                                                    id: 1490,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1491,
                                                    descricao: "Permite acesso ao botão Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1492,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1493,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1494,
                                                    descricao: "Permite acesso ao botão Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1495,
                                                    descricao: "Permite acesso ao botão Cancelamento CDA",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1496,
                                            descricao: "Permite acesso ao menu Informar Praga",
                                            filhas: [
                                                {
                                                    id: 1497,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1498,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1499,
                                    descricao: "Permite acesso ao menu de Matriz/Borbulheira/J.Clonal",
                                    filhas: [
                                        {
                                            id: 1500,
                                            descricao: "Permite acesso ao menu Gestão de Plano com Formação",
                                            filhas: [
                                                {
                                                    id: 1501,
                                                    descricao: "Permite acesso ao botão Acessar Plano AP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1502,
                                                    descricao: "Permite acesso ao botão Pesquisar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1503,
                                                    descricao: "Permite acesso ao botão Visualizar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1504,
                                                    descricao: "Permite acesso ao botão Incluir Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1505,
                                                    descricao: "Permite acesso ao botão Informar Semeadura/Transp./Enxertia",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1506,
                                                    descricao: "Permite acesso ao botão Encerrar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1507,
                                                    descricao: "Permite acesso ao botão Imprimir Relatório Anual",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1508,
                                                    descricao: "Permite acesso ao botão Operação Semeadura",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1509,
                                                    descricao: "Permite acesso ao botão Operação Transplantio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1510,
                                                    descricao: "Permite acesso ao botão Operação Enxertia",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1511,
                                                    descricao: "Permite acesso ao botão Estornar Produto Cesta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1512,
                                                    descricao: "Permite acesso ao botão Cancelar Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1513,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1514,
                                                    descricao: "Permite acesso ao botão Cancelar Op. a Gravar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1515,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. a Gravar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1516,
                                                    descricao: "Permite acesso ao botão Salvar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1517,
                                                    descricao: "Permite acesso ao botão Visualizar Insumo Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1518,
                                                    descricao: "Permite acesso ao botão Imprimir Etiqueta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1519,
                                                    descricao: "Permite acesso ao botão Incluir Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1520,
                                                    descricao: "Permite acesso ao botão Visualizar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1521,
                                                    descricao: "Permite acesso ao botão Cancelar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1522,
                                                    descricao: "Permite acesso ao botão Aprovar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1523,
                                                    descricao: "Permite acesso ao botão Reprovar Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1524,
                                                    descricao: "Permite acesso ao botão Imprimir Laudo Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1525,
                                                    descricao: "Permite acesso ao botão Iniciar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1526,
                                                    descricao: "Permite acesso ao botão Editar/Finalizar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1527,
                                                    descricao: "Permite acesso ao botão Visualizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1528,
                                                    descricao: "Permite acesso ao botão Informar Resultados Laboratoriais",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1529,
                                                    descricao: "Permite acesso ao botão Informar Vistoria CDA/Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1530,
                                                    descricao: "Permite acesso ao botão Aprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1531,
                                                    descricao: "Permite acesso ao botão Reprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1532,
                                                    descricao: "Permite acesso ao botão Cancelar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1533,
                                                    descricao: "Permite acesso ao botão Imprimir Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1534,
                                                    descricao: "Permite acesso ao botão Incluir Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1535,
                                                    descricao: "Permite acesso ao botão Editar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1536,
                                                    descricao: "Permite acesso ao botão Cancelar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1537,
                                                    descricao: "Permite acesso ao botão Informar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1538,
                                                    descricao: "Permite acesso ao botão Visualizar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1539,
                                                    descricao: "Permite acesso ao botão Incluir Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1540,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1541,
                                                    descricao: "Permite acesso ao botão Aprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1542,
                                                    descricao: "Permite acesso ao botão Reprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1543,
                                                    descricao: "Permite acesso ao botão Solicitar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1544,
                                                    descricao: "Permite acesso ao botão Salvar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1545,
                                                    descricao: "Permite acesso ao botão Finalizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1546,
                                                    descricao: "Permite acesso ao botão Imprimir Laudo Liberação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1547,
                                                    descricao: "Permite acesso ao botão Gerar DARE",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1548,
                                                    descricao: "Permite acesso ao botão Imprimir Certificado Prod/Formação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1549,
                                                    descricao: "Permite acesso ao botão Criar UP/Safras Recertificadas",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1550,
                                                    descricao: "Permite acesso ao botão Imprimir Ficha Inscrição UP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1551,
                                                    descricao: "Permite acesso ao botão Recertificar/Reembalar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1552,
                                                    descricao: "Permite acesso ao botão Visualizar Informar Ocorrência",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1553,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo CDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1554,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo Usuário Externo",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1555,
                                            descricao: "Permite acesso ao menu Aceite de Produtos (CFO/PTV)",
                                            filhas: [
                                                {
                                                    id: 1556,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1557,
                                                    descricao: "Permite acesso ao botão Aceitar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1558,
                                                    descricao: "Permite acesso ao botão Estornar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1559,
                                            descricao: "Permite acesso ao menu Descarte",
                                            filhas: [
                                                {
                                                    id: 1560,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1561,
                                                    descricao: "Permite acesso ao botão Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1562,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1563,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1564,
                                                    descricao: "Permite acesso ao botão Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1565,
                                                    descricao: "Permite acesso ao botão Cancelamento CDA",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1566,
                                            descricao: "Permite acesso ao menu Informar Praga",
                                            filhas: [
                                                {
                                                    id: 1567,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1568,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1569,
                                    descricao: "Permite acesso ao menu de Básica/Sementes",
                                    filhas: [
                                        {
                                            id: 1570,
                                            descricao: "Permite acesso ao menu Gestão de Plano sem Formação",
                                            filhas: [
                                                {
                                                    id: 1571,
                                                    descricao: "Permite acesso ao botão Acessar Plano AP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1572,
                                                    descricao: "Permite acesso ao botão Pesquisar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1573,
                                                    descricao: "Permite acesso ao botão Visualizar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1574,
                                                    descricao: "Permite acesso ao botão Incluir Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1575,
                                                    descricao: "Permite acesso ao botão Formalizar Plantio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1576,
                                                    descricao: "Permite acesso ao botão Encerrar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1577,
                                                    descricao: "Permite acesso ao botão Imprimir Relatório Anual",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1578,
                                                    descricao: "Permite acesso ao botão Formalizar Plantio",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1579,
                                                    descricao: "Permite acesso ao botão Cancelar Op. Efetivada",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1580,
                                                    descricao: "Permite acesso ao botão Cancelar Op. a Gravar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1581,
                                                    descricao: "Permite acesso ao botão Salvar Plano",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1582,
                                                    descricao: "Permite acesso ao botão Imprimir Etiqueta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1583,
                                                    descricao: "Permite acesso ao botão Iniciar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1584,
                                                    descricao: "Permite acesso ao botão Editar/Finalizar Planilha de Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1585,
                                                    descricao: "Permite acesso ao botão Visualizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1586,
                                                    descricao: "Permite acesso ao botão Informar Resultados Laboratoriais",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1587,
                                                    descricao: "Permite acesso ao botão Informar Vistoria CDA/Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1588,
                                                    descricao: "Permite acesso ao botão Aprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1589,
                                                    descricao: "Permite acesso ao botão Reprovar Liberação/Certificação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1590,
                                                    descricao: "Permite acesso ao botão Cancelar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1591,
                                                    descricao: "Permite acesso ao botão Imprimir Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1592,
                                                    descricao: "Permite acesso ao botão Incluir Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1593,
                                                    descricao: "Permite acesso ao botão Editar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1594,
                                                    descricao: "Permite acesso ao botão Cancelar Grupo Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1595,
                                                    descricao: "Permite acesso ao botão Informar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1596,
                                                    descricao: "Permite acesso ao botão Visualizar Lacre Bancada Lote Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1597,
                                                    descricao: "Permite acesso ao botão Incluir Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1598,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo Laudo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1599,
                                                    descricao: "Permite acesso ao botão Aprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1600,
                                                    descricao: "Permite acesso ao botão Reprovar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1601,
                                                    descricao: "Permite acesso ao botão Solicitar Retific. Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1602,
                                                    descricao: "Permite acesso ao botão Salvar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1603,
                                                    descricao: "Permite acesso ao botão Finalizar Planilha Coleta",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1604,
                                                    descricao: "Permite acesso ao botão Imprimir Laudo Liberação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1605,
                                                    descricao: "Permite acesso ao botão Gerar DARE",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1606,
                                                    descricao: "Permite acesso ao botão Imprimir Certificado Prod/Formação",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1607,
                                                    descricao: "Permite acesso ao botão Criar UP/Safras Recertificadas",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1608,
                                                    descricao: "Permite acesso ao botão Imprimir Ficha Inscrição UP",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1609,
                                                    descricao: "Permite acesso ao botão Recertificar/Reembalar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1610,
                                                    descricao: "Permite acesso ao botão Visualizar Informar Ocorrência",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1611,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo CDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1612,
                                                    descricao: "Permite acesso ao botão Visualizar Arquivo Usuário Externo",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1613,
                                            descricao: "Permite acesso ao menu Cadastro de Plantas",
                                            filhas: [
                                                {
                                                    id: 1614,
                                                    descricao: "Permite acesso ao botão ao Acessar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1615,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1616,
                                                    descricao: "Permite acesso ao botão Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1617,
                                                    descricao: "Permite acesso ao botão Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1618,
                                                    descricao: "Permite acesso ao botão Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1619,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1620,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1621,
                                                    descricao: "Permite acesso ao botão Incluir Produto",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1622,
                                                    descricao: "Permite acesso ao botão Alterar Produto",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1623,
                                                    descricao: "Permite acesso ao botão Excluir Produto",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1624,
                                            descricao: "Permite acesso ao menu Aceite de Produtos (CFO/PTV)",
                                            filhas: [
                                                {
                                                    id: 1625,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1626,
                                                    descricao: "Permite acesso ao botão Aceitar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1627,
                                                    descricao: "Permite acesso ao botão Estornar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1628,
                                            descricao: "Permite acesso ao menu Descarte",
                                            filhas: [
                                                {
                                                    id: 1629,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1630,
                                                    descricao: "Permite acesso ao botão Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1631,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1632,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1633,
                                                    descricao: "Permite acesso ao botão Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1634,
                                                    descricao: "Permite acesso ao botão Cancelamento CDA",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1635,
                                            descricao: "Permite acesso ao menu Informar Praga",
                                            filhas: [
                                                {
                                                    id: 1636,
                                                    descricao: "Permite acesso ao botão Informar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1637,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1638,
                                    descricao: "Permite acesso ao menu de Ocorrência de Interdição",
                                    filhas: [
                                        {
                                            id: 1639,
                                            descricao: "Permite acesso ao botão Acessar Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1640,
                                            descricao: "Permite acesso ao botão Incluir Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1641,
                                            descricao: "Permite acesso ao botão Incluir Interdição Cautelar Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1642,
                                            descricao: "Permite acesso ao botão Remover Interdição Cautelar Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1643,
                                            descricao: "Permite acesso ao botão Imprimir Modelo Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1644,
                                            descricao: "Permite acesso ao botão Incluir Arq. Doc. Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1645,
                                            descricao: "Permite acesso ao botão Visualizar Arq. Doc. Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1646,
                                            descricao: "Permite acesso ao botão Salvar Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1647,
                                            descricao: "Permite acesso ao botão Visualizar Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1648,
                                            descricao: "Permite acesso ao botão Alterar Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1649,
                                            descricao: "Permite acesso ao botão Incluir Arq. Laudo Lab. Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1650,
                                            descricao: "Permite acesso ao botão Visualizar Arq. Laudo Lab. Interd.",
                                            filhas: []
                                        },
                                        {
                                            id: 1651,
                                            descricao: "Permite acesso ao botão Finalizar Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1652,
                                            descricao: "Permite acesso ao botão Cancelar Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1653,
                                            descricao: "Permite acesso ao botão Imprimir Auto Interdição Cautelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1654,
                                            descricao: "Permite acesso ao botão Imprimir Auto Interdição Definitiva",
                                            filhas: []
                                        },
                                        {
                                            id: 1655,
                                            descricao: "Permite acesso ao botão Imprimir Auto Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1656,
                                            descricao: "Permite acesso ao botão Imprimir Auto Destruição",
                                            filhas: []
                                        },
                                        {
                                            id: 1657,
                                            descricao: "Permite acesso ao botão Incluir Destruição",
                                            filhas: []
                                        },
                                        {
                                            id: 1658,
                                            descricao: "Permite acesso ao botão Incluir Arq. Doc. Destruição",
                                            filhas: []
                                        },
                                        {
                                            id: 1659,
                                            descricao: "Permite acesso ao botão Visualizar Arq. Doc. Destruição",
                                            filhas: []
                                        },
                                        {
                                            id: 1660,
                                            descricao: "Permite acesso ao botão Salvar Destruição",
                                            filhas: []
                                        },
                                        {
                                            id: 1661,
                                            descricao: "Permite acesso ao botão Incluir Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 1662,
                                            descricao: "Permite acesso ao botão Alterar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 1663,
                                            descricao: "Permite acesso ao botão Cancelar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 1664,
                                            descricao: "Permite acesso ao botão Visualizar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 1665,
                                            descricao: "Permite acesso ao botão Salvar Inspeção",
                                            filhas: []
                                        },
                                        {
                                            id: 1666,
                                            descricao: "Permite acesso ao botão Incluir Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1667,
                                            descricao: "Permite acesso ao botão Incluir Arq. Doc. Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1668,
                                            descricao: "Permite acesso ao botão Visualizar Arq. Doc. Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1669,
                                            descricao: "Permite acesso ao botão Incluir Desinterdição Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1670,
                                            descricao: "Permite acesso ao botão Remover Desinterdição Lote",
                                            filhas: []
                                        },
                                        {
                                            id: 1671,
                                            descricao: "Permite acesso ao botão Salvar Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1672,
                                            descricao: "Permite acesso ao botão Alterar Notificação Interdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1673,
                                            descricao: "Permite acesso ao botão Alterar Notificação Desinterdição",
                                            filhas: []
                                        },
                                        {
                                            id: 1674,
                                            descricao: "Permite acesso ao botão Alterar Notificação Destruição",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1675,
                                    descricao: "Permite acesso ao menu de Ocorrência de Interdição",
                                    filhas: [
                                        {
                                            id: 1676,
                                            descricao: "Permite acesso ao botão Acessar",
                                            filhas: []
                                        },
                                        {
                                            id: 1677,
                                            descricao: "Permite acesso ao botão Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1678,
                                            descricao: "Permite acesso ao botão Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 1679,
                                            descricao: "Permite acesso ao botão Visualizar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1680,
                                    descricao: "Permite acesso ao menu de Transferência de Estufa",
                                    filhas: [
                                        {
                                            id: 1681,
                                            descricao: "Permite acesso ao botão Acessar",
                                            filhas: []
                                        },
                                        {
                                            id: 1682,
                                            descricao: "Permite acesso ao botão Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1683,
                                            descricao: "Permite acesso ao botão Salvar",
                                            filhas: []
                                        },
                                        {
                                            id: 1684,
                                            descricao: "Permite acesso ao botão Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1685,
                                            descricao: "Permite acesso ao botão Aprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1686,
                                            descricao: "Permite acesso ao botão Reprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1687,
                                            descricao: "Permite acesso ao botão Cancelar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1688,
                                    descricao: "Permite acesso ao menu de Entrada Materiais Externo",
                                    filhas: [
                                        {
                                            id: 1689,
                                            descricao: "Permite acesso ao menu Autorizações de Entrada",
                                            filhas: [
                                                {
                                                    id: 1690,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1691,
                                                    descricao: "Permite acesso ao botão Incluir Autorização",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1692,
                                                    descricao: "Permite acesso ao botão Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1693,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1694,
                                                    descricao: "Permite acesso ao botão Imprimir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1695,
                                                    descricao: "Permite acesso ao botão Incluir Produto",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1696,
                                                    descricao: "Permite acesso ao botão Alterar Produto",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1697,
                                                    descricao: "Permite acesso ao botão Excluir Produto",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1698,
                                                    descricao: "Permite acesso ao botão Aprovar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1699,
                                                    descricao: "Permite acesso ao botão Reprovar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1700,
                                                    descricao: "Permite acesso ao botão Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1701,
                                                    descricao: "Permite acesso ao botão Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1702,
                                                    descricao: "Permite acesso ao botão Incluir Decisões/Trâmites",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1703,
                                                    descricao: "Permite acesso ao botão Incluir Upload/Documentos",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1704,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1705,
                                                    descricao: "Permite acesso ao botão Visualizar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1706,
                                            descricao: "Permite acesso ao menu Documento Externo de Viveiro",
                                            filhas: [
                                                {
                                                    id: 1707,
                                                    descricao: "Permite acesso à funcionalidade Documento Externo de Viveiro",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1708,
                                                    descricao: "Permite acesso à funcionalidade Reentrada de Insumos",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1709,
                                    descricao: "Permite acesso ao menu de Consultas",
                                    filhas: [
                                        {
                                            id: 1710,
                                            descricao: "Permite acesso ao menu Consulta Lotes em Formação",
                                            filhas: [
                                                {
                                                    id: 1711,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1712,
                                            descricao: "Permite acesso ao menu Consulta Lotes Certificados",
                                            filhas: [
                                                {
                                                    id: 1713,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1714,
                                            descricao: "Permite acesso ao menu Consulta de Ocorrência",
                                            filhas: [
                                                {
                                                    id: 1715,
                                                    descricao: "Permite acesso ao botão Pesquisar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1888,
                                            descricao: "Consulta Laudos Vistoria",
                                            filhas: [
                                                {
                                                    id: 1927,
                                                    descricao: "Permite acesso ao botão Pesquisar Laudos",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1735,
                            descricao: "Permite acesso ao menu de Controle de SMR",
                            filhas: [
                                {
                                    id: 1736,
                                    descricao: "Permite acesso ao menu Cancro Cítrico",
                                    filhas: [
                                        {
                                            id: 1358,
                                            descricao: "Permite acesso ao menu Relatório de Vistoria de SMR de CC",
                                            filhas: [
                                                {
                                                    id: 1359,
                                                    descricao: "Permite acesso ao botão Incluir Relatório de Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1360,
                                                    descricao: "Permite acesso ao botão Alterar Relatório de Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1361,
                                                    descricao: "Permite acesso ao botão Cancelar Relatório de Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1362,
                                                    descricao: "Permite acesso ao botão Visualizar Relatório de Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1363,
                                                    descricao: "Permite acesso ao botão Imprimir Relatório de Vistoria",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1364,
                                                    descricao: "Permite acesso ao botão Emitir Termo de Hab. de Colheita",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1365,
                                            descricao: "Permite acesso ao menu Termo de Hab. de Colheita SMR de CC",
                                            filhas: [
                                                {
                                                    id: 1366,
                                                    descricao: "Permite acesso ao botão Cancelar Termo de Hab. de Colheita",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1367,
                                                    descricao: "Permite acesso ao botão Exibir Termo de Hab. de Colheita",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1368,
                                                    descricao: "Permite acesso ao botão Imprimir Termo de Hab. de Colheita",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1737,
                                            descricao: "Permite acesso ao menu Adesão de SMR de Cancro Cítrico",
                                            filhas: [
                                                {
                                                    id: 1353,
                                                    descricao: "Permite acesso ao botão Solicitar Adesão UP/UC",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1354,
                                                    descricao: "Permite acesso ao botão Deferir Solicitação de Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1355,
                                                    descricao: "Permite acesso ao botão Indeferir Solicitação de Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1356,
                                                    descricao: "Permite acesso ao botão Deferir UP/UC",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1357,
                                                    descricao: "Permite acesso ao botão Indeferir UP/UC",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1738,
                                                    descricao: "Permite acesso ao botão Visualizar Atividade Produtiva",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1739,
                                                    descricao: "Permite acesso ao botão Visualizar Solicitação de Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1740,
                                                    descricao: "Permite acesso ao botão Imprimir Termo de Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1741,
                                                    descricao: "Permite acesso ao botão Solicitar Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1742,
                                                    descricao: "Permite acesso ao botão Alterar Solicitação de Adesão",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1947,
                                                    descricao: "Permite acesso ao botão Cancelar Solicitação de Adesão",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 105,
                    descricao: "Diários",
                    filhas: [
                        {
                            id: 106,
                            descricao: "Emissão de PTV",
                            filhas: [
                                {
                                    id: 107,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 108,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 109,
                                    descricao: "Cancelar",
                                    filhas: []
                                },
                                {
                                    id: 110,
                                    descricao: "Aprovar PTV",
                                    filhas: []
                                },
                                {
                                    id: 111,
                                    descricao: "Imprimir",
                                    filhas: []
                                },
                                {
                                    id: 112,
                                    descricao: "Imprimir Boleto",
                                    filhas: []
                                },
                                {
                                    id: 113,
                                    descricao: "Gerar PTV",
                                    filhas: []
                                },
                                {
                                    id: 564,
                                    descricao: "Incluir PTV",
                                    filhas: []
                                },
                                {
                                    id: 565,
                                    descricao: "PTV - Produto - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 566,
                                    descricao: "PTV - Produto - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 567,
                                    descricao: "PTV - Laudo Laboratorial - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 568,
                                    descricao: "PTV - Laudo Laboratorial - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 569,
                                    descricao: "PTV - Tratamento Fitossanitario - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 570,
                                    descricao: "PTV - Tratamento Fitossanitario - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 571,
                                    descricao: "PTV - Declaração Adicional - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 572,
                                    descricao: "PTV - Declaração Adicional - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 573,
                                    descricao: "Incluir PTV baseada em laudo laboratorial",
                                    filhas: []
                                },
                                {
                                    id: 574,
                                    descricao: "PTV com laudo - Produto - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 575,
                                    descricao: "PTV com laudo - Produto - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 576,
                                    descricao: "PTV com laudo - Laudo Laboratorial - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 577,
                                    descricao: "PTV com laudo - Laudo Laboratorial - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 578,
                                    descricao: "PTV com laudo - Tratamento Fitossanitario - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 579,
                                    descricao: "PTV com laudo - Tratamento Fitossanitario - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 580,
                                    descricao: "PTV com laudo - Declaração Adicional - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 581,
                                    descricao: "PTV com laudo - Declaração Adicional - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 610,
                                    descricao: "Excluir PTV",
                                    filhas: []
                                },
                                {
                                    id: 613,
                                    descricao: "PTV com laudo - Excluir",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 1369,
                            descricao: "Permite acesso ao menu Emissão de ATF",
                            filhas: [
                                {
                                    id: 1370,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 1371,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 1372,
                                    descricao: "Cancelar",
                                    filhas: []
                                },
                                {
                                    id: 1373,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 1374,
                                    descricao: "Imprimir",
                                    filhas: []
                                },
                                {
                                    id: 1375,
                                    descricao: "Gerar ATF",
                                    filhas: []
                                },
                                {
                                    id: 1376,
                                    descricao: "Incluir ATF",
                                    filhas: []
                                },
                                {
                                    id: 1377,
                                    descricao: "ATF - Produto - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 1378,
                                    descricao: "ATF - Produto - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 1379,
                                    descricao: "ATF - Laudo Laboratorial - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 1380,
                                    descricao: "ATF - Laudo Laboratorial - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 1381,
                                    descricao: "ATF - Tratamento Fitossanitario - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 1382,
                                    descricao: "ATF - Tratamento Fitossanitario - Excluir",
                                    filhas: []
                                },
                                {
                                    id: 1383,
                                    descricao: "ATF - Declaração Adicional - Incluir",
                                    filhas: []
                                },
                                {
                                    id: 1384,
                                    descricao: "ATF - Declaração Adicional - Excluir",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 582,
                    descricao: "Relatórios",
                    filhas: [
                        {
                            id: 583,
                            descricao: "Unidade de Produção",
                            filhas: [
                                {
                                    id: 584,
                                    descricao: "Visualizar Unidade de Produção",
                                    filhas: []
                                },
                                {
                                    id: 585,
                                    descricao: "Gerar PDF",
                                    filhas: []
                                },
                                {
                                    id: 586,
                                    descricao: "Gerar XLS",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 587,
                            descricao: "Unidade de Consolidação",
                            filhas: [
                                {
                                    id: 588,
                                    descricao: "Visualizar Unidade de Consolidação",
                                    filhas: []
                                },
                                {
                                    id: 589,
                                    descricao: "Gerar PDF",
                                    filhas: []
                                },
                                {
                                    id: 590,
                                    descricao: "Gerar XLS",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 591,
                            descricao: "Consultas Especificas",
                            filhas: [
                                {
                                    id: 592,
                                    descricao: "Gerar PDF",
                                    filhas: []
                                },
                                {
                                    id: 593,
                                    descricao: "Gerar XLS",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 594,
                            descricao: "Relatórios Padronizados",
                            filhas: [
                                {
                                    id: 595,
                                    descricao: "Gerar PDF",
                                    filhas: []
                                },
                                {
                                    id: 597,
                                    descricao: "Gerar XLS",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 646,
                            descricao: "Relatórios Técnicos MAPA",
                            filhas: [
                                {
                                    id: 647,
                                    descricao: "CFOs por RT/UP",
                                    filhas: [
                                        {
                                            id: 655,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 656,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 657,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 648,
                                    descricao: "CFOs por RT/EDA/UP",
                                    filhas: [
                                        {
                                            id: 658,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 659,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 660,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 649,
                                    descricao: "CFOCs por RT/UC",
                                    filhas: [
                                        {
                                            id: 661,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 662,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 663,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 650,
                                    descricao: "CFOCs por RT/EDA/UC",
                                    filhas: [
                                        {
                                            id: 664,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 665,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 666,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 651,
                                    descricao: "CFOs/CFOCs por Produto",
                                    filhas: [
                                        {
                                            id: 667,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 668,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 669,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 652,
                                    descricao: "CFOs/CFOCs por EDA/Produto",
                                    filhas: [
                                        {
                                            id: 670,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 671,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 672,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 653,
                                    descricao: "PTVs por Produto",
                                    filhas: [
                                        {
                                            id: 673,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 674,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 675,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 654,
                                    descricao: "PTVs por EDA/Produto",
                                    filhas: [
                                        {
                                            id: 676,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 677,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 678,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 833,
                            descricao: "Cancro Cítrico e Greening",
                            filhas: [
                                {
                                    id: 834,
                                    descricao: "Atividade Produtiva",
                                    filhas: [
                                        {
                                            id: 835,
                                            descricao: "Qtde. Plantas - EDA",
                                            filhas: [
                                                {
                                                    id: 836,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 837,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 838,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 839,
                                            descricao: "Qtde. Plantas - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 840,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 841,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 842,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 843,
                                            descricao: "Qtde. Plantas - Estado",
                                            filhas: [
                                                {
                                                    id: 844,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 845,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 846,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 847,
                                    descricao: "Consolidado da Citricultura",
                                    filhas: [
                                        {
                                            id: 848,
                                            descricao: "Por EDA",
                                            filhas: [
                                                {
                                                    id: 849,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 850,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 851,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 852,
                                            descricao: "Por EDA/Município",
                                            filhas: [
                                                {
                                                    id: 853,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 854,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 855,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 856,
                                            descricao: "Var. Copa - EDA",
                                            filhas: [
                                                {
                                                    id: 857,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 858,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 859,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 860,
                                            descricao: "Var. Copa - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 861,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 862,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 863,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 864,
                                            descricao: "Var. Copa - Estado",
                                            filhas: [
                                                {
                                                    id: 865,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 866,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 867,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 868,
                                    descricao: "Elim. Plantas - Doenças",
                                    filhas: [
                                        {
                                            id: 869,
                                            descricao: "Faixa Idade - EDA",
                                            filhas: [
                                                {
                                                    id: 870,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 871,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 872,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 873,
                                            descricao: "Faixa Idade - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 874,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 875,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 876,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 877,
                                            descricao: "Faixa Idade - Estado",
                                            filhas: [
                                                {
                                                    id: 878,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 879,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 880,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 881,
                                            descricao: "Var. Copa - EDA",
                                            filhas: [
                                                {
                                                    id: 882,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 883,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 884,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 885,
                                            descricao: "Var. Copa - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 886,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 887,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 888,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 889,
                                            descricao: "Var. Copa - Estado",
                                            filhas: [
                                                {
                                                    id: 890,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 891,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 892,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 893,
                                            descricao: "Var. Copa/Pt. Enx. - EDA",
                                            filhas: [
                                                {
                                                    id: 894,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 895,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 896,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 897,
                                            descricao: "Var. Copa/Pt. Enx. - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 898,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 899,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 900,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 901,
                                            descricao: "Var. Copa/Pt. Enx. - Estado",
                                            filhas: [
                                                {
                                                    id: 902,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 903,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 904,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 905,
                                            descricao: "Qtde. Plantas - EDA",
                                            filhas: [
                                                {
                                                    id: 906,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 907,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 908,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 909,
                                            descricao: "Qtde. Plantas - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 910,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 911,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 912,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 913,
                                            descricao: "Qtde. Plantas - Estado",
                                            filhas: [
                                                {
                                                    id: 914,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 915,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 916,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 917,
                                    descricao: "Elim. Plantas - Geral",
                                    filhas: [
                                        {
                                            id: 918,
                                            descricao: "Faixa Idade - EDA",
                                            filhas: [
                                                {
                                                    id: 919,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 920,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 921,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 922,
                                            descricao: "Faixa Idade - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 923,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 924,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 925,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 926,
                                            descricao: "Faixa Idade - Estado",
                                            filhas: [
                                                {
                                                    id: 927,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 928,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 929,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 930,
                                            descricao: "Var. Copa - EDA",
                                            filhas: [
                                                {
                                                    id: 931,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 932,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 933,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 934,
                                            descricao: "Var. Copa - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 935,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 936,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 937,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 938,
                                            descricao: "Var. Copa - Estado",
                                            filhas: [
                                                {
                                                    id: 939,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 940,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 941,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 942,
                                            descricao: "Var. Copa/Pt. Enx. - EDA",
                                            filhas: [
                                                {
                                                    id: 943,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 944,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 945,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 946,
                                            descricao: "Var. Copa/Pt. Enx. - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 947,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 948,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 949,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 950,
                                            descricao: "Var. Copa/Pt. Enx. - Estado",
                                            filhas: [
                                                {
                                                    id: 951,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 952,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 953,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 954,
                                            descricao: "Qtde. Plantas - EDA",
                                            filhas: [
                                                {
                                                    id: 955,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 956,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 957,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 958,
                                            descricao: "Qtde. Plantas - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 959,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 960,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 961,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 962,
                                            descricao: "Qtde. Plantas - Estado",
                                            filhas: [
                                                {
                                                    id: 963,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 964,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 965,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 966,
                                    descricao: "Elim. Plantas - Outr. Motivos",
                                    filhas: [
                                        {
                                            id: 967,
                                            descricao: "Faixa Idade - EDA",
                                            filhas: [
                                                {
                                                    id: 968,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 969,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 970,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 971,
                                            descricao: "Faixa Idade - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 972,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 973,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 974,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 975,
                                            descricao: "Faixa Idade - Estado",
                                            filhas: [
                                                {
                                                    id: 976,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 977,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 978,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 979,
                                            descricao: "Var. Copa - EDA",
                                            filhas: [
                                                {
                                                    id: 980,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 981,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 982,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 983,
                                            descricao: "Var. Copa - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 984,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 985,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 986,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 987,
                                            descricao: "Var. Copa - Estado",
                                            filhas: [
                                                {
                                                    id: 988,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 989,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 990,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 991,
                                            descricao: "Var. Copa/Pt. Enx. - EDA",
                                            filhas: [
                                                {
                                                    id: 992,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 993,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 994,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 995,
                                            descricao: "Var. Copa/Pt. Enx. - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 996,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 997,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 998,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 999,
                                            descricao: "Var. Copa/Pt. Enx. - Estado",
                                            filhas: [
                                                {
                                                    id: 1000,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1001,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1002,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1003,
                                            descricao: "Qtde. Plantas - EDA",
                                            filhas: [
                                                {
                                                    id: 1004,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1005,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1006,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1007,
                                            descricao: "Qtde. Plantas - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 1008,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1009,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1010,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1011,
                                            descricao: "Qtde. Plantas - Estado",
                                            filhas: [
                                                {
                                                    id: 1012,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1013,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1014,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1015,
                                    descricao: "Est. Produção/Produtividade",
                                    filhas: [
                                        {
                                            id: 1016,
                                            descricao: "Var. Copa/Pt. Enx. - EDA",
                                            filhas: [
                                                {
                                                    id: 1017,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1018,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1019,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1020,
                                            descricao: "Var. Copa/Pt. Enx. - EDA/Mun.",
                                            filhas: [
                                                {
                                                    id: 1021,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1022,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1023,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1024,
                                            descricao: "Var. Copa/Pt. Enx. - Estado",
                                            filhas: [
                                                {
                                                    id: 1025,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1026,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1027,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1028,
                                    descricao: "Ocorr. Plantas Cancro Cítrico",
                                    filhas: [
                                        {
                                            id: 1029,
                                            descricao: "AP - EDA",
                                            filhas: [
                                                {
                                                    id: 1030,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1031,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1032,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1033,
                                            descricao: "AP - EDA/Mun.",
                                            filhas: [
                                                {
                                                    id: 1034,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1035,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1036,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1037,
                                            descricao: "UP - EDA",
                                            filhas: [
                                                {
                                                    id: 1038,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1039,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1040,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1041,
                                            descricao: "UP - EDA/Mun.",
                                            filhas: [
                                                {
                                                    id: 1042,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1043,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1044,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1045,
                                    descricao: "Ocorr. Plantas Greening",
                                    filhas: [
                                        {
                                            id: 1046,
                                            descricao: "AP - EDA",
                                            filhas: [
                                                {
                                                    id: 1047,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1048,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1049,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1050,
                                            descricao: "AP - EDA/Mun.",
                                            filhas: [
                                                {
                                                    id: 1051,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1052,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1053,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1054,
                                            descricao: "UP - EDA",
                                            filhas: [
                                                {
                                                    id: 1055,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1056,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1057,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1058,
                                            descricao: "UP - EDA/Mun.",
                                            filhas: [
                                                {
                                                    id: 1059,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1060,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1061,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1062,
                                    descricao: "Posição Entrega Últ. 3 Sem.",
                                    filhas: [
                                        {
                                            id: 1063,
                                            descricao: "Por EDA",
                                            filhas: [
                                                {
                                                    id: 1064,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1065,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1066,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1067,
                                            descricao: "Por EDA/Município",
                                            filhas: [
                                                {
                                                    id: 1068,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1069,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1070,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1071,
                                    descricao: "Result. Inspeções Entregues",
                                    filhas: [
                                        {
                                            id: 1072,
                                            descricao: "Por EDA",
                                            filhas: [
                                                {
                                                    id: 1073,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1074,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1075,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1076,
                                            descricao: "Por EDA/Município",
                                            filhas: [
                                                {
                                                    id: 1077,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1078,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1079,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1080,
                                    descricao: "Var. Citricultura - Semestres",
                                    filhas: [
                                        {
                                            id: 1081,
                                            descricao: "Var. Copa - EDA",
                                            filhas: [
                                                {
                                                    id: 1082,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1083,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1084,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1085,
                                            descricao: "Var. Copa - EDA/Município",
                                            filhas: [
                                                {
                                                    id: 1086,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1087,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1088,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1089,
                                            descricao: "Var. Copa - Estado",
                                            filhas: [
                                                {
                                                    id: 1090,
                                                    descricao: "Gerar PDF",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1091,
                                                    descricao: "Gerar XLS",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1092,
                                                    descricao: "Gerar CSV",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1219,
                            descricao: "Permite acesso ao menu de Relatórios de Agrotóxicos",
                            filhas: [
                                {
                                    id: 1220,
                                    descricao: "Permite acesso ao menu de Relatório de Descarte",
                                    filhas: [
                                        {
                                            id: 1221,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1222,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1223,
                                    descricao: "Permite acesso ao menu de Relatório de Devolução",
                                    filhas: [
                                        {
                                            id: 1224,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1225,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1226,
                                    descricao: "Permite acesso ao menu de Relatório de Estoque",
                                    filhas: [
                                        {
                                            id: 1227,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1228,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1229,
                                    descricao: "Permite acesso ao menu de Relatório de Receituário",
                                    filhas: [
                                        {
                                            id: 1230,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1231,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1232,
                                    descricao: "Permite acesso ao menu de Relatório de Uso",
                                    filhas: [
                                        {
                                            id: 1233,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1234,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1235,
                                    descricao: "Permite acesso ao menu de Relatório de Venda de Agrotóxicos",
                                    filhas: [
                                        {
                                            id: 1236,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1237,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1279,
                                    descricao: "Permite acesso ao menu de Relatório de ART de Agrotóxicos",
                                    filhas: [
                                        {
                                            id: 1280,
                                            descricao: "Permite acesso ao botão Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1281,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1954,
                                    descricao: "Cadastro de Agrotóxicos",
                                    filhas: [
                                        {
                                            id: 1955,
                                            descricao: "Permite acesso ao botão Gerar XLS",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1956,
                            descricao: "Relatórios de Produtos",
                            filhas: [
                                {
                                    id: 1958,
                                    descricao: "Relatórios de Produtos - Gerar XLS",
                                    filhas: []
                                },
                                {
                                    id: 1959,
                                    descricao: "Relatórios de Produtos - Gerar PDF",
                                    filhas: []
                                },
                                {
                                    id: 1960,
                                    descricao: "Relatórios de Produtos - Gerar CSV",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 114,
            descricao: "Administração",
            filhas: [
                {
                    id: 115,
                    descricao: "Cadastros",
                    filhas: [
                        {
                            id: 116,
                            descricao: "Apoio",
                            filhas: [
                                {
                                    id: 117,
                                    descricao: "Equipamentos",
                                    filhas: [
                                        {
                                            id: 118,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 119,
                                            descricao: "Paralisar",
                                            filhas: []
                                        },
                                        {
                                            id: 120,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 121,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 122,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 123,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 124,
                                            descricao: "Incluir Equipamentos",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 125,
                                    descricao: "Veículos",
                                    filhas: [
                                        {
                                            id: 126,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 127,
                                            descricao: "Paralisar",
                                            filhas: []
                                        },
                                        {
                                            id: 128,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 129,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 130,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 131,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 132,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 133,
                            descricao: "Locais",
                            filhas: [
                                {
                                    id: 134,
                                    descricao: "Abrigos",
                                    filhas: [
                                        {
                                            id: 135,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 136,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 137,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 138,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 139,
                                    descricao: "Propriedades",
                                    filhas: [
                                        {
                                            id: 140,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 141,
                                            descricao: "Visualizar Prorpiedade",
                                            filhas: []
                                        },
                                        {
                                            id: 142,
                                            descricao: "Alterar Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 143,
                                            descricao: "Dados Complementares da Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 144,
                                            descricao: "Ativar Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 145,
                                            descricao: "Suspender Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 146,
                                            descricao: "Cancelar Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 147,
                                            descricao: "Incluir Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 148,
                                            descricao: "Incluir Proprietário",
                                            filhas: []
                                        },
                                        {
                                            id: 149,
                                            descricao: "Excluir Proprietário",
                                            filhas: []
                                        },
                                        {
                                            id: 150,
                                            descricao: "Vincular A.P.",
                                            filhas: []
                                        },
                                        {
                                            id: 151,
                                            descricao: "Vincular AP - Incluir Produtores",
                                            filhas: []
                                        },
                                        {
                                            id: 152,
                                            descricao: "Vincular AP - Incluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 153,
                                            descricao: "Vincular AP - Incluir Responsável Técnico (Animal)",
                                            filhas: []
                                        },
                                        {
                                            id: 154,
                                            descricao: "Alterar AP",
                                            filhas: []
                                        },
                                        {
                                            id: 155,
                                            descricao: "Alterar AP - Incluir Produtores",
                                            filhas: []
                                        },
                                        {
                                            id: 156,
                                            descricao: "Alterar AP - Excluir Produtores",
                                            filhas: []
                                        },
                                        {
                                            id: 157,
                                            descricao: "Vincular AP - Editar Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 158,
                                            descricao: "Alterar AP – Excluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 159,
                                            descricao: "Alterar AP - Incluir Responsável Técnico (Animal)",
                                            filhas: []
                                        },
                                        {
                                            id: 160,
                                            descricao: "Alterar AP - Excluir Responsável Técnico (Animal)",
                                            filhas: []
                                        },
                                        {
                                            id: 161,
                                            descricao: "Excluir AP",
                                            filhas: []
                                        },
                                        {
                                            id: 162,
                                            descricao: "Cancelar AP",
                                            filhas: []
                                        },
                                        {
                                            id: 163,
                                            descricao: "Vincular UP",
                                            filhas: []
                                        },
                                        {
                                            id: 164,
                                            descricao: "Vincular UP - Incluir Responsável Técnico",
                                            filhas: []
                                        },
                                        {
                                            id: 165,
                                            descricao: "Alterar UP",
                                            filhas: []
                                        },
                                        {
                                            id: 166,
                                            descricao: "Alterar UP - Incluir Responsável Técnico",
                                            filhas: []
                                        },
                                        {
                                            id: 167,
                                            descricao: "Excluir UP",
                                            filhas: []
                                        },
                                        {
                                            id: 168,
                                            descricao: "Vincular UC",
                                            filhas: []
                                        },
                                        {
                                            id: 169,
                                            descricao: "Vincular UC - Incluir Responsável Técnico",
                                            filhas: []
                                        },
                                        {
                                            id: 170,
                                            descricao: "Alterar UC",
                                            filhas: []
                                        },
                                        {
                                            id: 171,
                                            descricao: "Alterar UC - Incluir Responsável Técnico",
                                            filhas: []
                                        },
                                        {
                                            id: 172,
                                            descricao: "Excluir UC",
                                            filhas: []
                                        },
                                        {
                                            id: 173,
                                            descricao: "Vincular Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 174,
                                            descricao: "Proprietário Principal (indicar)",
                                            filhas: []
                                        },
                                        {
                                            id: 175,
                                            descricao: "Alterar Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 176,
                                            descricao: "Vincular Aglomeração - Liberar/Suspender Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 177,
                                            descricao: "Alterar Aglomeração - Liberar/Suspender Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 178,
                                            descricao: "Ativar Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 179,
                                            descricao: "Suspender Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 180,
                                            descricao: "Cancelar Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 181,
                                            descricao: "Excluir Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 413,
                                            descricao: "Incluir Produtor/Promotor de Eventos",
                                            filhas: []
                                        },
                                        {
                                            id: 414,
                                            descricao: "Excluir Produtor/Promotor de Eventos",
                                            filhas: []
                                        },
                                        {
                                            id: 415,
                                            descricao: "Vincular AP - Liberar/Suspender Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 416,
                                            descricao: "Vincular AP – Excluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 417,
                                            descricao: "Alterar AP - Produtor Principal (indicar)",
                                            filhas: []
                                        },
                                        {
                                            id: 418,
                                            descricao: "Alterar AP - Editar Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 419,
                                            descricao: "Alterar AP - Liberar/Suspender Movimentação",
                                            filhas: []
                                        },
                                        {
                                            id: 420,
                                            descricao: "Ativar AP",
                                            filhas: []
                                        },
                                        {
                                            id: 421,
                                            descricao: "Suspender AP",
                                            filhas: []
                                        },
                                        {
                                            id: 422,
                                            descricao: "Vincular Aglomeração - Incluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 423,
                                            descricao: "Vincular Aglomeração - Editar Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 424,
                                            descricao: "Vincular Aglomeração – Excluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 425,
                                            descricao: "Vincular Aglomeração – Incluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 426,
                                            descricao: "Alterar Aglomeração - Incluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 427,
                                            descricao: "Alterar Aglomeração - Editar Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 428,
                                            descricao: "Alterar Aglomeração – Excluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 429,
                                            descricao: "Alterar Aglomeração – Excluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 435,
                                            descricao: "Alterar AP - Incluir Rebanho",
                                            filhas: []
                                        },
                                        {
                                            id: 436,
                                            descricao: "Vincular AP - Excluir Produtores",
                                            filhas: []
                                        },
                                        {
                                            id: 437,
                                            descricao: "Vincular AP - Produtor Principal",
                                            filhas: []
                                        },
                                        {
                                            id: 438,
                                            descricao: "Vincular AP - Excluir Responsável Técnico (Animal)",
                                            filhas: []
                                        },
                                        {
                                            id: 439,
                                            descricao: "Alterar Aglomeração - Incluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 440,
                                            descricao: "Vincular Aglomeração - Excluir Promotora",
                                            filhas: []
                                        },
                                        {
                                            id: 457,
                                            descricao: "Excluir Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 462,
                                            descricao: "Visualizar AP",
                                            filhas: []
                                        },
                                        {
                                            id: 463,
                                            descricao: "Reprovar AP",
                                            filhas: []
                                        },
                                        {
                                            id: 464,
                                            descricao: "Alterar AP - Aprovar Vinculo Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 465,
                                            descricao: "Alterar AP - Rejeitar Vinculo Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 466,
                                            descricao: "Alterar AP - Incluir Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 467,
                                            descricao: "Alterar AP - Excluir Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 468,
                                            descricao: "Vincular AP - Aprovar Vinculo Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 469,
                                            descricao: "Vincular AP - Rejeitar Vinculo Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 470,
                                            descricao: "Vincular AP - Incluir Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 471,
                                            descricao: "Vincular AP - Excluir Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 472,
                                            descricao: "Visualizar UC",
                                            filhas: []
                                        },
                                        {
                                            id: 473,
                                            descricao: "Ativar UC",
                                            filhas: []
                                        },
                                        {
                                            id: 474,
                                            descricao: "Reprovar UC",
                                            filhas: []
                                        },
                                        {
                                            id: 475,
                                            descricao: "Vincular UC - Informações Complementares",
                                            filhas: []
                                        },
                                        {
                                            id: 476,
                                            descricao: "Suspender UC",
                                            filhas: []
                                        },
                                        {
                                            id: 477,
                                            descricao: "Cancelar UC",
                                            filhas: []
                                        },
                                        {
                                            id: 478,
                                            descricao: "Vincular UC - Ocorrencia Fitossanitaria - Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 479,
                                            descricao: "Vincular UC - Ocorrencia Fitossanitaria - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 480,
                                            descricao: "Vincular UC - Ocorrencia Fitossanitaria - Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 481,
                                            descricao: "Vincular UC - Observações Adicionais - Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 482,
                                            descricao: "Vincular UC - Observações Adicionais - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 483,
                                            descricao: "Vincular UC - Observações Adicionais - Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 484,
                                            descricao: "Vincular UC - Produto - Vincular",
                                            filhas: []
                                        },
                                        {
                                            id: 485,
                                            descricao: "Vincular UC - Produto - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 486,
                                            descricao: "Vincular UC - Produto - Desvincular",
                                            filhas: []
                                        },
                                        {
                                            id: 487,
                                            descricao: "Visualizar UP",
                                            filhas: []
                                        },
                                        {
                                            id: 488,
                                            descricao: "Cancelar UP",
                                            filhas: []
                                        },
                                        {
                                            id: 489,
                                            descricao: "Vincular UP - Safra - Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 490,
                                            descricao: "Vincular UP - Safra - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 491,
                                            descricao: "Vincular UP - Safra - Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 492,
                                            descricao: "Vincular UP - Safra - Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 493,
                                            descricao: "Vincular UP - Ocorrencia Fitossanitaria - Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 494,
                                            descricao: "Vincular UP - Ocorrencia Fitossanitaria - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 495,
                                            descricao: "Vincular UP - Ocorrencia Fitossanitaria - Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 496,
                                            descricao: "Vincular UP - Observações Adicionais - Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 497,
                                            descricao: "Vincular UP - Observações Adicionais - Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 498,
                                            descricao: "Vincular UP - Observações Adicionais - Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 499,
                                            descricao: "Ativar UP",
                                            filhas: []
                                        },
                                        {
                                            id: 500,
                                            descricao: "Reprovar UP",
                                            filhas: []
                                        },
                                        {
                                            id: 501,
                                            descricao: "Vincular UP - Informações Complementares",
                                            filhas: []
                                        },
                                        {
                                            id: 502,
                                            descricao: "Suspender UP",
                                            filhas: []
                                        },
                                        {
                                            id: 620,
                                            descricao: "Vincular AP - Informações Adicionais Avícolas",
                                            filhas: []
                                        },
                                        {
                                            id: 621,
                                            descricao: "Vincular AP - Incluir Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 622,
                                            descricao: "Vincular AP - Editar Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 623,
                                            descricao: "Vincular AP - Liberar/Suspender Movimentação Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 624,
                                            descricao: "Vincular AP - Cancelar Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 625,
                                            descricao: "Vincular AP - Excluir Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 626,
                                            descricao: "Alterar AP - Informações Adicionais Avícolas",
                                            filhas: []
                                        },
                                        {
                                            id: 627,
                                            descricao: "Alterar AP - Incluir Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 628,
                                            descricao: "Alterar AP - Editar Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 629,
                                            descricao: "Alterar AP - Liberar/Suspender Movimentação Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 630,
                                            descricao: "Alterar AP - Cancelar Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 631,
                                            descricao: "Alterar AP - Excluir Núcleo",
                                            filhas: []
                                        },
                                        {
                                            id: 773,
                                            descricao: "Vincular AP - Vincular Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 774,
                                            descricao: "Vincular AP - Desvincular Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 775,
                                            descricao: "Alterar AP - Vincular Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 776,
                                            descricao: "Alterar AP - Desvincular Responsável Técnico (Vegetal)",
                                            filhas: []
                                        },
                                        {
                                            id: 1104,
                                            descricao: "Alterar AP - Editar Rebanho Avícola",
                                            filhas: []
                                        },
                                        {
                                            id: 1105,
                                            descricao: "Vincular AP - Editar Rebanho Avícola",
                                            filhas: []
                                        },
                                        {
                                            id: 1248,
                                            descricao: "Visualizar Aglomeração",
                                            filhas: []
                                        },
                                        {
                                            id: 1291,
                                            descricao: "Editar Produto - SMR",
                                            filhas: []
                                        },
                                        {
                                            id: 1292,
                                            descricao: "Imprimir Ficha de Cadastro de SMR",
                                            filhas: []
                                        },
                                        {
                                            id: 1411,
                                            descricao: "Permite acesso ao botão Informações Adicionais",
                                            filhas: []
                                        },
                                        {
                                            id: 1412,
                                            descricao: "Permite acesso ao botão Requerer Cadastro/Renovação",
                                            filhas: []
                                        },
                                        {
                                            id: 1413,
                                            descricao: "Permite acesso ao botão Aprovar Requerimento",
                                            filhas: []
                                        },
                                        {
                                            id: 1414,
                                            descricao: "Permite acesso ao botão Imprimir CCF na alteração da AP",
                                            filhas: []
                                        },
                                        {
                                            id: 1415,
                                            descricao: "Permite acesso ao botão Ativar Laudo de Infraestrutura",
                                            filhas: []
                                        },
                                        {
                                            id: 1416,
                                            descricao: "Permite acesso ao botão Imprimir Laudo de Infraestrutura",
                                            filhas: []
                                        },
                                        {
                                            id: 1417,
                                            descricao: "Permite acesso ao botão Visualizar dos Arquivos do Histórico",
                                            filhas: []
                                        },
                                        {
                                            id: 1418,
                                            descricao: "Permite acesso ao botão Visualizar dos Arquivos do Laudo",
                                            filhas: []
                                        },
                                        {
                                            id: 1419,
                                            descricao: "Permite acesso ao botão Cancelar dos Arquivos do Laudo",
                                            filhas: []
                                        },
                                        {
                                            id: 1420,
                                            descricao: "Permite acesso ao botão Excluir dos Arquivos do Laudo",
                                            filhas: []
                                        },
                                        {
                                            id: 1421,
                                            descricao: "Permite acesso ao botão Incluir o nome da estufa",
                                            filhas: []
                                        },
                                        {
                                            id: 1422,
                                            descricao: "Permite acesso ao botão Remover o nome da estufa",
                                            filhas: []
                                        },
                                        {
                                            id: 1423,
                                            descricao: "Permite acesso ao botão Incluir o item da Planta Matriz",
                                            filhas: []
                                        },
                                        {
                                            id: 1424,
                                            descricao: "Permite acesso ao botão Excluir o item da Planta Matriz",
                                            filhas: []
                                        },
                                        {
                                            id: 1425,
                                            descricao: "Permite acesso ao botão Salvar Informações Adicionais",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 182,
                                    descricao: "Unidades Administrativas",
                                    filhas: [
                                        {
                                            id: 183,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 184,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 185,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 186,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 187,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 694,
                                    descricao: "Consultar Código da Propriedade",
                                    filhas: [
                                        {
                                            id: 695,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1257,
                                    descricao: "Apiário",
                                    filhas: [
                                        {
                                            id: 1258,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1259,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1260,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 1261,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 1262,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 1263,
                                            descricao: "Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 1264,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 1265,
                                            descricao: "Excluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1266,
                                            descricao: "Definir Responsável Principal",
                                            filhas: []
                                        },
                                        {
                                            id: 1267,
                                            descricao: "Adicionar Responsável",
                                            filhas: []
                                        },
                                        {
                                            id: 1268,
                                            descricao: "Excluir Responsável",
                                            filhas: []
                                        },
                                        {
                                            id: 1269,
                                            descricao: "Adicionar Propriedade",
                                            filhas: []
                                        },
                                        {
                                            id: 1270,
                                            descricao: "Excluir Propriedade",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1808,
                                    descricao: "Testes Brucelose e Tuberculose",
                                    filhas: [
                                        {
                                            id: 1809,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 1810,
                                            descricao: "Incluir Local",
                                            filhas: []
                                        },
                                        {
                                            id: 1811,
                                            descricao: "Excluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1812,
                                            descricao: "Imprimir Laudo de Vistoria",
                                            filhas: []
                                        },
                                        {
                                            id: 1813,
                                            descricao: "Editar",
                                            filhas: []
                                        },
                                        {
                                            id: 1814,
                                            descricao: "Visualizar",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 188,
                            descricao: "Outros",
                            filhas: [
                                {
                                    id: 189,
                                    descricao: "Base Legal",
                                    filhas: [
                                        {
                                            id: 190,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 191,
                                            descricao: "Paralisar",
                                            filhas: []
                                        },
                                        {
                                            id: 192,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 193,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 194,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 195,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 196,
                                            descricao: "Incluir Base Legal",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 204,
                                    descricao: "Doenças",
                                    filhas: [
                                        {
                                            id: 205,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 206,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 207,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 208,
                                            descricao: "Vincular/Desvincular Produto e Vacina/Agrotóxico",
                                            filhas: []
                                        },
                                        {
                                            id: 209,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 210,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 219,
                                    descricao: "Observações de GTAs",
                                    filhas: [
                                        {
                                            id: 220,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 221,
                                            descricao: "Vincular/Desvincular Produto CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 222,
                                            descricao: "Vincular/Desvincular Finalidade",
                                            filhas: []
                                        },
                                        {
                                            id: 223,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 224,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 225,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 226,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1394,
                                            descricao: "Vincular/Desvincular Propriedade",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 227,
                                    descricao: "Programas Oficiais",
                                    filhas: [
                                        {
                                            id: 228,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 229,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 230,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 231,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 232,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 233,
                                            descricao: "Vincular/Desvincular Etapa",
                                            filhas: []
                                        },
                                        {
                                            id: 234,
                                            descricao: "Vincular/Desvincular Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 235,
                                            descricao: "Abrir Etapa",
                                            filhas: []
                                        },
                                        {
                                            id: 236,
                                            descricao: "Vincular Produto",
                                            filhas: []
                                        },
                                        {
                                            id: 237,
                                            descricao: "Desvincular Produto",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 243,
                                    descricao: "Tipos de Infrações",
                                    filhas: [
                                        {
                                            id: 244,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 245,
                                            descricao: "Paralisar",
                                            filhas: []
                                        },
                                        {
                                            id: 246,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 247,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 248,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 249,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 250,
                                            descricao: "Incluir Infração",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 251,
                                    descricao: "Tipos de Penalidades",
                                    filhas: [
                                        {
                                            id: 252,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 253,
                                            descricao: "Paralisar",
                                            filhas: []
                                        },
                                        {
                                            id: 254,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 255,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 256,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 257,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 258,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 441,
                                    descricao: "Pragas",
                                    filhas: [
                                        {
                                            id: 507,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 508,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 509,
                                            descricao: "Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 510,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 511,
                                            descricao: "Excluir",
                                            filhas: []
                                        },
                                        {
                                            id: 512,
                                            descricao: "Inserir Regra",
                                            filhas: []
                                        },
                                        {
                                            id: 513,
                                            descricao: "Alterar Regra",
                                            filhas: []
                                        },
                                        {
                                            id: 514,
                                            descricao: "Excluir Regra",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 444,
                                    descricao: "Agrotóxicos",
                                    filhas: [
                                        {
                                            id: 211,
                                            descricao: " Ingredientes Ativos",
                                            filhas: [
                                                {
                                                    id: 212,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 213,
                                                    descricao: "Suspender",
                                                    filhas: []
                                                },
                                                {
                                                    id: 214,
                                                    descricao: "Ativar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 215,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 216,
                                                    descricao: "Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 217,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 218,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 503,
                                                    descricao: "Excluir",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 445,
                                            descricao: "Produtos Comerciais",
                                            filhas: [
                                                {
                                                    id: 504,
                                                    descricao: "Pesquisar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 505,
                                                    descricao: "Incluir agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 506,
                                                    descricao: "Visualizar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1138,
                                                    descricao: "Permite acesso ao botão Ativar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1139,
                                                    descricao: "Permite acesso ao botão Alterar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1140,
                                                    descricao: "Permite acesso ao botão Suspender agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1141,
                                                    descricao: "Permite acesso ao botão Cancelar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1142,
                                                    descricao: "Permite acesso ao botão Excluir agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1143,
                                                    descricao: "Permite acesso ao botão Salvar agrotóxico",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1144,
                                                    descricao: "Permite acesso ao botão Imprimir certificado",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1145,
                                                    descricao: "Permite acesso ao botão Visualizar documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1146,
                                                    descricao: "Permite acesso ao botão Incluir documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1147,
                                                    descricao: "Permite acesso ao botão Aprovar documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1148,
                                                    descricao: "Permite acesso ao botão Reprovar documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1149,
                                                    descricao: "Permite acesso ao botão Cancelar documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1150,
                                                    descricao: "Permite acesso ao botão Excluir documento",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1948,
                                                    descricao: "Permite acesso ao botão Alterar Registro CDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1949,
                                                    descricao: "Permite acesso ao botão Alterar Registro MAPA",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 1937,
                                            descricao: "Cultura/Indicação de Uso",
                                            filhas: [
                                                {
                                                    id: 1938,
                                                    descricao: "Cultura/Indicação de Uso - Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1939,
                                                    descricao: "Cultura/Indicação de Uso - Ativar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1940,
                                                    descricao: "Cultura/Indicação de Uso - Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1941,
                                                    descricao: "Cultura/Indicação de Uso - Suspender",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1942,
                                                    descricao: "Cultura/Indicação de Uso - Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1943,
                                                    descricao: "Cultura/Indicação de Uso - Excluir",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 515,
                                    descricao: "Declaração Adicional",
                                    filhas: [
                                        {
                                            id: 516,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 517,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 518,
                                            descricao: "Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 519,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 520,
                                            descricao: "Excluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 777,
                                    descricao: "Tela Inicial",
                                    filhas: [
                                        {
                                            id: 778,
                                            descricao: "Voltar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 779,
                                    descricao: "Cancro Cítrico e Greening",
                                    filhas: [
                                        {
                                            id: 780,
                                            descricao: "Faixa de Plantas",
                                            filhas: [
                                                {
                                                    id: 781,
                                                    descricao: "Por Idade",
                                                    filhas: [
                                                        {
                                                            id: 1093,
                                                            descricao: "Por Idade",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1094,
                                                            descricao: "Incluir",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1095,
                                                            descricao: "Alterar",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1096,
                                                            descricao: "Excluir",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1097,
                                                            descricao: "Salvar",
                                                            filhas: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 782,
                                                    descricao: "Por Quantidade",
                                                    filhas: [
                                                        {
                                                            id: 1098,
                                                            descricao: "Por Idade",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1099,
                                                            descricao: "Incluir",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1121,
                                                            descricao: "Alterar",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1122,
                                                            descricao: "Excluir",
                                                            filhas: []
                                                        },
                                                        {
                                                            id: 1123,
                                                            descricao: "Salvar",
                                                            filhas: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: 783,
                                            descricao: "Motivo Eliminação Plantas",
                                            filhas: [
                                                {
                                                    id: 784,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 785,
                                                    descricao: "Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 786,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 787,
                                                    descricao: "Visualizar Motivos",
                                                    filhas: []
                                                },
                                                {
                                                    id: 788,
                                                    descricao: "Visualizar Ocorrência",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 789,
                                            descricao: "Parâmetros Gerais",
                                            filhas: [
                                                {
                                                    id: 790,
                                                    descricao: "Alterar Parâmetros Gerais",
                                                    filhas: []
                                                },
                                                {
                                                    id: 791,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 792,
                                                    descricao: "Excluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 793,
                                                    descricao: "Salvar - Geral",
                                                    filhas: []
                                                },
                                                {
                                                    id: 794,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 795,
                                                    descricao: "Adicionar AP com exceção",
                                                    filhas: []
                                                },
                                                {
                                                    id: 796,
                                                    descricao: "Salvar AP com exceção",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1404,
                                    descricao: "Permite acesso ao menu de Controle de Viveiros",
                                    filhas: [
                                        {
                                            id: 1405,
                                            descricao: "Permite acesso ao menu Parâmetros Gerais",
                                            filhas: [
                                                {
                                                    id: 1406,
                                                    descricao: "Permite acesso ao botão alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1407,
                                                    descricao: "Permite acesso ao botão salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1408,
                                                    descricao: "Permite acesso ao botão incluir exceção",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1409,
                                                    descricao: "Permite acesso ao botão salvar exceção",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1410,
                                                    descricao: "Permite acesso ao botão excluir exceção",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 1752,
                                    descricao: "Permite acesso ao menu CIPOA",
                                    filhas: [
                                        {
                                            id: 1753,
                                            descricao: "Permite acesso ao menu Processo",
                                            filhas: [
                                                {
                                                    id: 1754,
                                                    descricao: "Permite acesso ao botão Pesquisar processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1755,
                                                    descricao: "Permite acesso ao botão Incluir processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1756,
                                                    descricao: "Permite acesso ao botão Editar processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1757,
                                                    descricao: "Permite acesso ao botão Visualizar processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1758,
                                                    descricao: "Permite acesso ao botão Imprimir Protocolo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1759,
                                                    descricao: "Permite acesso ao botão Enviar análise processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1760,
                                                    descricao: "Permite acesso ao botão Cancelar processo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1761,
                                                    descricao: "Permite analisar o processo - EDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1762,
                                                    descricao: "Permite acesso ao botão Aprovar processo - EDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1763,
                                                    descricao: "Permite acesso ao botão Incluir despacho - EDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1764,
                                                    descricao: "Permite acesso ao botão Reprovar processo - EDA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1765,
                                                    descricao: "Permite analisar o processo - CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1851,
                                                    descricao: "Permite acesso ao botão Aprovar processo - CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1852,
                                                    descricao: "Permite acesso ao botão Incluir despacho - CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1853,
                                                    descricao: "Permite acesso ao botão Reprovar processo - CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1854,
                                                    descricao: "Permite acesso ao botão Urgente",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1855,
                                                    descricao: "Permite acesso ao botão Retificar formulário",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1856,
                                                    descricao: "Permite acesso ao botão Excluir retificação formulário",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1857,
                                                    descricao: "Permite acesso ao botão Imprimir formulário",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1858,
                                                    descricao: "Permite acesso ao botão Aprovar arquivo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1859,
                                                    descricao: "Permite acesso ao botão Excluir arquivo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1860,
                                                    descricao: "Permite acesso ao botão Reprovar arquivo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1861,
                                                    descricao: "Permite acesso ao botão Visualizar arquivo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1862,
                                                    descricao: "Permite acesso ao botão Incluir nota",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 259,
                            descricao: "Pessoas",
                            filhas: [
                                {
                                    id: 260,
                                    descricao: "Pessoas Físicas",
                                    filhas: [
                                        {
                                            id: 261,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 262,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 263,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 264,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 265,
                                            descricao: "Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 266,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 267,
                                            descricao: "Incluir Funcionário CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 398,
                                            descricao: "Aba Funcionário",
                                            filhas: []
                                        },
                                        {
                                            id: 409,
                                            descricao: "Habilitação OK",
                                            filhas: []
                                        },
                                        {
                                            id: 410,
                                            descricao: "Habilitação Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 411,
                                            descricao: "Habilitação Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 412,
                                            descricao: "Habilitação Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 430,
                                            descricao: "Aba Habilitação/Registro de Conselho",
                                            filhas: []
                                        },
                                        {
                                            id: 431,
                                            descricao: "Incluir Registro no Conselho",
                                            filhas: []
                                        },
                                        {
                                            id: 432,
                                            descricao: "Excluir Registro no Conselho",
                                            filhas: []
                                        },
                                        {
                                            id: 433,
                                            descricao: "Incluir Habilitações/Cadastro",
                                            filhas: []
                                        },
                                        {
                                            id: 434,
                                            descricao: "Excluir Habilitações/Cadastro",
                                            filhas: []
                                        },
                                        {
                                            id: 459,
                                            descricao: "Incluir Pessoa Física",
                                            filhas: []
                                        },
                                        {
                                            id: 1273,
                                            descricao: "Visualizar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1274,
                                            descricao: "Incluir Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1275,
                                            descricao: "Aprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1276,
                                            descricao: "Reprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1277,
                                            descricao: "Cancelar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1278,
                                            descricao: "Excluir Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1282,
                                            descricao: "Desvincular Apiário",
                                            filhas: []
                                        },
                                        {
                                            id: 1390,
                                            descricao: "Perfil Funcionário CDA",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 268,
                                    descricao: "Pessoas Jurídicas",
                                    filhas: [
                                        {
                                            id: 269,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 270,
                                            descricao: "Visualizar",
                                            filhas: [
                                                {
                                                    id: 1272,
                                                    descricao: "Gerar Certificado",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 271,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 272,
                                            descricao: "Incluir \"Área e Categoria de Atividade Animal\"",
                                            filhas: []
                                        },
                                        {
                                            id: 273,
                                            descricao: "Excluir \"Área e Categoria de Atividade Animal\"",
                                            filhas: []
                                        },
                                        {
                                            id: 274,
                                            descricao: "Incluir \"Área e Categoria de Atividade Vegetal\"",
                                            filhas: []
                                        },
                                        {
                                            id: 275,
                                            descricao: "Excluir \"Área e Categoria de Atividade Vegetal\"",
                                            filhas: []
                                        },
                                        {
                                            id: 276,
                                            descricao: "Vincular/Desvincular Pessoa Física",
                                            filhas: []
                                        },
                                        {
                                            id: 277,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 278,
                                            descricao: "Suspender",
                                            filhas: []
                                        },
                                        {
                                            id: 279,
                                            descricao: "Ativar",
                                            filhas: []
                                        },
                                        {
                                            id: 280,
                                            descricao: "Incluir Pessoa Jurídica",
                                            filhas: []
                                        },
                                        {
                                            id: 458,
                                            descricao: "Excluir",
                                            filhas: []
                                        },
                                        {
                                            id: 711,
                                            descricao: "Excluir - Espécies Vinculadas ao Estabelecimento",
                                            filhas: []
                                        },
                                        {
                                            id: 712,
                                            descricao: "Incluir - Espécies Vinculadas ao Estabelecimento",
                                            filhas: []
                                        },
                                        {
                                            id: 1137,
                                            descricao: "Incluir Tipo de Empresa",
                                            filhas: []
                                        },
                                        {
                                            id: 1249,
                                            descricao: "Visualizar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1250,
                                            descricao: "Incluir Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1251,
                                            descricao: "Aprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1252,
                                            descricao: "Reprovar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1253,
                                            descricao: "Cancelar Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1254,
                                            descricao: "Excluir Documento",
                                            filhas: []
                                        },
                                        {
                                            id: 1255,
                                            descricao: "Lista de Checagem",
                                            filhas: []
                                        },
                                        {
                                            id: 1256,
                                            descricao: "Reprovar",
                                            filhas: []
                                        },
                                        {
                                            id: 1283,
                                            descricao: "Desvincular Apiário",
                                            filhas: []
                                        },
                                        {
                                            id: 1389,
                                            descricao: "Alterar Lanagro",
                                            filhas: []
                                        },
                                        {
                                            id: 1875,
                                            descricao: "Alterar Registro",
                                            filhas: []
                                        },
                                        {
                                            id: 1930,
                                            descricao: "Alterar a data de vencimento do registro PJ-Agrotoxico",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 281,
                            descricao: "Produtos",
                            filhas: [
                                {
                                    id: 282,
                                    descricao: "Grupo de Produtos",
                                    filhas: [
                                        {
                                            id: 283,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 284,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 285,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 286,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 287,
                                    descricao: "Subgrupo de Produtos",
                                    filhas: [
                                        {
                                            id: 288,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 289,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 290,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 291,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 292,
                                            descricao: "Vincular/Desvincular",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 293,
                                    descricao: "Complemento de Produtos",
                                    filhas: [
                                        {
                                            id: 294,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 295,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 296,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 297,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 298,
                                            descricao: "Vincular/Desvincular",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 299,
                                    descricao: "Detalhe de Produtos",
                                    filhas: [
                                        {
                                            id: 300,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 301,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 302,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 303,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 304,
                                            descricao: "Vincular/Desvincular",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 305,
                                    descricao: "Produtos CDA",
                                    filhas: [
                                        {
                                            id: 306,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 307,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 308,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 1106,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 1107,
                                            descricao: "Visualizar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 309,
                                    descricao: "Características Técnicas",
                                    filhas: [
                                        {
                                            id: 310,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 311,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 312,
                                            descricao: "Incluir Nova Característica",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 313,
                                    descricao: "Especificações Técnicas",
                                    filhas: [
                                        {
                                            id: 314,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 315,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 316,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 317,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 318,
                                            descricao: "Vincular/Desvincular",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 319,
                                    descricao: "Finalidades Especificações",
                                    filhas: [
                                        {
                                            id: 320,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 321,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 322,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 323,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 680,
                                    descricao: "Produtos CIPOA",
                                    filhas: [
                                        {
                                            id: 681,
                                            descricao: "Tópicos",
                                            filhas: [
                                                {
                                                    id: 683,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 684,
                                                    descricao: "Ativar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 685,
                                                    descricao: "Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 686,
                                                    descricao: "Suspender",
                                                    filhas: []
                                                },
                                                {
                                                    id: 687,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 688,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 682,
                                            descricao: "Nomenclatura dos Produtos",
                                            filhas: [
                                                {
                                                    id: 689,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 690,
                                                    descricao: "Ativar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 691,
                                                    descricao: "Suspender",
                                                    filhas: []
                                                },
                                                {
                                                    id: 692,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 693,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1108,
                                                    descricao: "Visualizar",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 696,
                                            descricao: "Produto CIPOA no SISP",
                                            filhas: [
                                                {
                                                    id: 697,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 698,
                                                    descricao: "Pesquisar Produto CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 699,
                                                    descricao: "Incluir Produto CIPOA",
                                                    filhas: []
                                                },
                                                {
                                                    id: 700,
                                                    descricao: "Salvar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 701,
                                                    descricao: "Alterar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 702,
                                                    descricao: "Cancelar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 703,
                                                    descricao: "Excluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 704,
                                                    descricao: "Suspender",
                                                    filhas: []
                                                },
                                                {
                                                    id: 705,
                                                    descricao: "Ativar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 706,
                                                    descricao: "OK",
                                                    filhas: []
                                                },
                                                {
                                                    id: 1403,
                                                    descricao: "Permite acesso ao botão Imprimir Certificado",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 330,
                            descricao: "Serviços",
                            filhas: [
                                {
                                    id: 331,
                                    descricao: " Grupos de Tipos de Serviços",
                                    filhas: [
                                        {
                                            id: 332,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 333,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 334,
                                            descricao: "Alterar",
                                            filhas: []
                                        },
                                        {
                                            id: 335,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 336,
                                            descricao: "Incluir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 337,
                                    descricao: "Tipos de Serviços",
                                    filhas: [
                                        {
                                            id: 338,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 339,
                                            descricao: "Visualizar",
                                            filhas: []
                                        },
                                        {
                                            id: 340,
                                            descricao: "Alterar Serviço",
                                            filhas: []
                                        },
                                        {
                                            id: 341,
                                            descricao: "Alterar Vínculo",
                                            filhas: []
                                        },
                                        {
                                            id: 342,
                                            descricao: "Cancelar",
                                            filhas: []
                                        },
                                        {
                                            id: 343,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 344,
                                            descricao: "Vincular",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 353,
                    descricao: "Segurança",
                    filhas: [
                        {
                            id: 354,
                            descricao: "Usuários",
                            filhas: [
                                {
                                    id: 355,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 356,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 357,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 358,
                                    descricao: "Incluir",
                                    filhas: []
                                },
                                {
                                    id: 387,
                                    descricao: "Grupo de Usuário",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 359,
                            descricao: "Grupos de Usuários",
                            filhas: [
                                {
                                    id: 360,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 361,
                                    descricao: "Visualizar",
                                    filhas: []
                                },
                                {
                                    id: 362,
                                    descricao: "Alterar",
                                    filhas: []
                                },
                                {
                                    id: 363,
                                    descricao: "Excluir",
                                    filhas: []
                                },
                                {
                                    id: 364,
                                    descricao: "Incluir",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 713,
                    descricao: "Financeiro",
                    filhas: [
                        {
                            id: 345,
                            descricao: "Boleto",
                            filhas: [
                                {
                                    id: 346,
                                    descricao: "Validação Manual Pagamento",
                                    filhas: [
                                        {
                                            id: 347,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 348,
                                            descricao: "Validar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 349,
                                    descricao: "Validação Bancária Pagamento",
                                    filhas: [
                                        {
                                            id: 350,
                                            descricao: "Importar",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 351,
                                    descricao: "Gerar Boleto Substituto",
                                    filhas: [
                                        {
                                            id: 352,
                                            descricao: "Substituir",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 389,
                                    descricao: "Pesquisar/Cancelar Boletos",
                                    filhas: [
                                        {
                                            id: 446,
                                            descricao: "Visualizar Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 447,
                                            descricao: "Substituir Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 448,
                                            descricao: "Cancelar Boleto",
                                            filhas: []
                                        },
                                        {
                                            id: 449,
                                            descricao: "Validação CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 451,
                                            descricao: "Validação Manual",
                                            filhas: []
                                        },
                                        {
                                            id: 452,
                                            descricao: "Imprimir Boleto",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 442,
                                    descricao: "Gerar Boleto",
                                    filhas: [
                                        {
                                            id: 460,
                                            descricao: "PTV",
                                            filhas: [
                                                {
                                                    id: 461,
                                                    descricao: "Gerar Boleto",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 596,
                                            descricao: "GTA",
                                            filhas: [
                                                {
                                                    id: 450,
                                                    descricao: "Gerar Boleto",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 714,
                            descricao: "Ocorrências",
                            filhas: [
                                {
                                    id: 727,
                                    descricao: "Pesquisar",
                                    filhas: []
                                },
                                {
                                    id: 728,
                                    descricao: "Incluir Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 729,
                                    descricao: "Alterar Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 730,
                                    descricao: "Cancelar Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 731,
                                    descricao: "Solicitar Restituição",
                                    filhas: []
                                },
                                {
                                    id: 732,
                                    descricao: "Restituir Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 733,
                                    descricao: "Visualizar Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 734,
                                    descricao: "Retificar Ocorrência",
                                    filhas: []
                                },
                                {
                                    id: 735,
                                    descricao: "Dívida Ativa",
                                    filhas: []
                                },
                                {
                                    id: 1100,
                                    descricao: "Imprimir Restituição",
                                    filhas: []
                                },
                                {
                                    id: 1932,
                                    descricao: "Gerar Relatório CSV",
                                    filhas: []
                                }
                            ]
                        },
                        {
                            id: 715,
                            descricao: "DARE",
                            filhas: [
                                {
                                    id: 718,
                                    descricao: "Gerar DARE",
                                    filhas: [
                                        {
                                            id: 736,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 737,
                                            descricao: "Emitir DARE",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 719,
                                    descricao: "Gerenciar DARE",
                                    filhas: [
                                        {
                                            id: 738,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 739,
                                            descricao: "Reemitir DARE",
                                            filhas: []
                                        },
                                        {
                                            id: 740,
                                            descricao: "Imprimir DARE",
                                            filhas: []
                                        },
                                        {
                                            id: 741,
                                            descricao: "Cancelar DARE",
                                            filhas: []
                                        },
                                        {
                                            id: 768,
                                            descricao: "Divida Ativa",
                                            filhas: []
                                        },
                                        {
                                            id: 770,
                                            descricao: "Substituir",
                                            filhas: []
                                        },
                                        {
                                            id: 771,
                                            descricao: "Validação Manual",
                                            filhas: []
                                        },
                                        {
                                            id: 772,
                                            descricao: "Validação CDA",
                                            filhas: []
                                        },
                                        {
                                            id: 1931,
                                            descricao: "Gerar Relatório CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 720,
                                    descricao: "Validação Manual Pagamento",
                                    filhas: [
                                        {
                                            id: 742,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 743,
                                            descricao: "Próximo",
                                            filhas: []
                                        },
                                        {
                                            id: 744,
                                            descricao: "Validar",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 716,
                            descricao: "Cadastros",
                            filhas: [
                                {
                                    id: 721,
                                    descricao: "Serviços",
                                    filhas: [
                                        {
                                            id: 724,
                                            descricao: "Item de Serviço",
                                            filhas: [
                                                {
                                                    id: 745,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 746,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 747,
                                                    descricao: "Alterar Item de Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 748,
                                                    descricao: "Excluir Item de Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 749,
                                                    descricao: "Ativar Item de Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 750,
                                                    descricao: "Suspender Item de Serviço",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 725,
                                            descricao: "Grupo de Serviço",
                                            filhas: [
                                                {
                                                    id: 751,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 752,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 753,
                                                    descricao: "Alterar Grupo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 754,
                                                    descricao: "Excluir Grupo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 755,
                                                    descricao: "Ativar Grupo",
                                                    filhas: []
                                                },
                                                {
                                                    id: 756,
                                                    descricao: "Suspender Grupo",
                                                    filhas: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 726,
                                            descricao: "Serviço",
                                            filhas: [
                                                {
                                                    id: 757,
                                                    descricao: "Pesquisar",
                                                    filhas: []
                                                },
                                                {
                                                    id: 758,
                                                    descricao: "Incluir",
                                                    filhas: []
                                                },
                                                {
                                                    id: 759,
                                                    descricao: "Alterar Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 760,
                                                    descricao: "Excluir Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 761,
                                                    descricao: "Ativar Serviço",
                                                    filhas: []
                                                },
                                                {
                                                    id: 762,
                                                    descricao: "Suspender Serviço",
                                                    filhas: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 722,
                                    descricao: "UFESP",
                                    filhas: [
                                        {
                                            id: 763,
                                            descricao: "Pesquisar",
                                            filhas: []
                                        },
                                        {
                                            id: 764,
                                            descricao: "Incluir",
                                            filhas: []
                                        },
                                        {
                                            id: 765,
                                            descricao: "Alterar",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 717,
                            descricao: "Relatórios",
                            filhas: [
                                {
                                    id: 723,
                                    descricao: "Arrecadação",
                                    filhas: [
                                        {
                                            id: 766,
                                            descricao: "Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 767,
                                            descricao: "Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1887,
                                            descricao: "Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                },
                                {
                                    id: 1876,
                                    descricao: "Inadimplentes",
                                    filhas: [
                                        {
                                            id: 1884,
                                            descricao: "Relatório Inadimplentes - Gerar PDF",
                                            filhas: []
                                        },
                                        {
                                            id: 1885,
                                            descricao: "Relatório Inadimplentes - Gerar XLS",
                                            filhas: []
                                        },
                                        {
                                            id: 1886,
                                            descricao: "Relatório Inadimplentes - Gerar CSV",
                                            filhas: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1779,
                    descricao: "Via Rápida Empresa (VRE)",
                    filhas: [
                        {
                            id: 1780,
                            descricao: "Protocolos Gedave",
                            filhas: []
                        },
                        {
                            id: 1781,
                            descricao: "Controles",
                            filhas: [
                                {
                                    id: 1782,
                                    descricao: "Controle de Class. de Risco",
                                    filhas: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}