# Oraculo - resumo do MVP

O Oraculo e um sistema de consulta assistida por IA que responde, recomenda e orienta usuarios a partir de conhecimento documental controlado. O principio central do produto e que recomendacoes operacionais so podem existir quando houver base normativa suficiente, sempre com referencias documentais auditaveis.

## Escopo do MVP

- Uma instalacao atende uma unica organizacao.
- Todo uso exige usuario identificado.
- As fontes publicadas usam acesso compartilhado entre os usuarios habilitados.
- O MVP diferencia apenas dois papeis: usuario identificado e curador.
- O Oraculo nao executa acoes em sistemas externos.
- O Oraculo nao consulta ERP, CRM, chamados, bancos ou outros sistemas operacionais em tempo real.
- O Oraculo pode orientar onde verificar dado externo quando houver fonte documental que sustente essa orientacao.

## Fontes e autoridade

- Fonte normativa define o que deve ser seguido como verdade operacional.
- Fonte de apoio ajuda a interpretar, resumir ou contextualizar, mas nao prevalece sobre fonte normativa.
- Fonte de apoio da conversa vale somente naquela conversa.
- Regra cadastrada diretamente no Oraculo pode ser fonte normativa, desde que tenha metadados normativos e publicacao normativa.
- Fonte normativa global prevalece sobre fonte normativa de area, exceto quando houver excecao normativa explicita.
- Fonte normativa de area pode estar vinculada a mais de uma area de conhecimento.
- O tipo de origem da fonte, como arquivo anexado ou regra cadastrada, nao define sua autoridade.
- Traducao normativa facilita leitura, mas a fonte original prevalece em caso de divergencia.
- Pratica informal pode ser fonte de apoio, mas nunca vence fonte normativa.

## Publicacao e curadoria

- Fonte anexada nao vira normativa automaticamente.
- Publicacao normativa exige curador, metadados normativos, qualidade de extracao suficiente e nota de mudanca.
- No MVP, uma publicacao normativa exige apenas um curador.
- Qualquer curador pode publicar nova versao normativa para substituir uma fonte publicada.
- Versoes normativas publicadas sao imutaveis; mudancas criam nova versao.
- Nova versao normativa entra em vigor imediatamente.
- Responsavel fixo pela fonte nao e obrigatorio no escopo inicial.
- Rascunho normativo nao sustenta recomendacao e fica visivel apenas para curador.
- Sugestao normativa enviada por usuario precisa de avaliacao de curador antes de virar fonte normativa.
- Fonte sensivel nao deve ser publicada no acesso compartilhado.

## Respostas da IA

- Recomendacao operacional exige base normativa suficiente.
- Toda recomendacao operacional deve citar referencia documental, trecho curto quando disponivel e conflitos ou limitacoes relevantes.
- Cada parte relevante de uma recomendacao deve apontar para a referencia que a sustenta.
- Perguntas binarias devem comecar pela conclusao direta, seguida de justificativa e referencia.
- Quando faltar base normativa suficiente, o Oraculo faz recusa documental, informando escopo consultado, fontes relacionadas e curadoria necessaria.
- O Oraculo deve dizer "nao encontrei base suficiente no escopo consultado", nao "nao existe regra".
- Pedido para ignorar regras nao altera a exigencia de base normativa.
- Perguntas hipoteticas nao devem ser respondidas; o Oraculo pode redirecionar para a regra vigente aplicavel.
- Comparacao de opcoes reais e permitida, mas deve apenas listar conformidade e lacunas por opcao, sem escolher uma vencedora.

## Conflitos e excecoes

- Conflitos devem ser identificados preferencialmente no nivel de trecho normativo.
- Conflito que afeta a resposta deve ser informado ao usuario.
- Publicacao normativa pode gerar alerta de conflito para o curador.
- Publicar apesar de alerta de conflito exige justificativa de conflito.
- Excecao normativa so pode ser aplicada quando documentada em fonte normativa.
- Excecao de area pode limitar uma fonte global somente quando identifica a regra geral limitada e as condicoes de aplicacao.
- Resposta que aplica excecao deve mostrar regra geral, excecao aplicavel e conclusao.

## Auditoria e versoes

- Toda recomendacao operacional deve produzir rastro de auditoria.
- O rastro deve preservar pergunta, resposta, escopo, referencias, versoes usadas e conflitos relevantes.
- Consulta temporal usa as fontes vigentes no periodo perguntado.
- Fonte substituida nao sustenta pergunta atual, mas pode sustentar consulta temporal.
- Resposta antiga baseada em fonte substituida deve sinalizar que a fonte usada nao e mais a versao ativa.
- Comparacao normativa deve citar as versoes comparadas e indicar a versao ativa quando houver recomendacao atual.

## Documentos, artefatos e busca

- Analise de documento pode extrair fatos de anexos da conversa, mas esses fatos nao viram fonte normativa.
- Resumo de apoio e permitido, mas nao e recomendacao operacional.
- Baixa qualidade de extracao impede que trecho incerto sustente recomendacao.
- Curador pode revisar texto extraido antes da publicacao normativa; a referencia deve indicar quando o trecho veio de texto revisado.
- Busca de fontes e parte do MVP e permite localizar fontes sem depender da conversa.
- Busca mostra versao ativa por padrao; fontes substituidas aparecem por historico, filtro explicito, consulta temporal ou comparacao normativa.
- Exportacao de resposta deve preservar conclusao, data, referencia documental e trecho curto usado, sem virar fonte normativa.
- Artefato assistido, como e-mail ou minuta, pode ser gerado com base nas fontes e deve separar texto gerado da base documental usada.
- Artefato editado pelo usuario so vira registro persistente quando salvo ou exportado explicitamente.
- Artefato editado pode ser submetido explicitamente como sugestao normativa ou fonte de apoio.

## Lacunas e melhoria da base

- Recusas recorrentes sobre o mesmo tema podem formar lacuna normativa.
- Prioridade de lacuna deve considerar volume de perguntas e risco percebido.
- Recusa documental pode encaminhar para sugestao normativa quando a lacuna exigir curadoria.
- Curador pode encerrar lacuna sem criar nova fonte normativa, desde que registre motivo.
- Encerramento de lacuna pode orientar recusas futuras, mas nao vira fonte normativa.

## Treinamento guiado

- Treinamento guiado faz parte do escopo inicial.
- Treinamento fica em area separada da conversa operacional.
- Respostas conversacionais podem sugerir treinamento relevante quando houver relacao com a pergunta.
- A forma principal de treinamento no MVP e a trilha curada.
- Trilhas sao criadas manualmente por curador.
- Trilhas apresentam conteudo guiado sem perguntas de verificacao no MVP.
- Trilha curada e composta por blocos de treinamento escritos por curador e vinculados a referencias documentais.
- Progresso de treinamento e preservado por usuario identificado.
- Quando uma fonte normativa usada pela trilha e substituida, a trilha entra em revisao.
- Trilha em revisao fica indisponivel para usuarios comuns e visivel para curador.
- Ao republicar trilha revisada, progresso dos usuarios e preservado; blocos alterados devem ser sinalizados para quem ja concluiu.

## ADRs registradas

- [ADR 0001 - Oraculo nao executa acoes externas no MVP](../adr/0001-oraculo-nao-executa-acoes-externas-no-mvp.md)
- [ADR 0002 - Fontes publicadas tem acesso compartilhado no MVP](../adr/0002-fontes-publicadas-com-acesso-compartilhado-no-mvp.md)
- [ADR 0003 - Versoes normativas publicadas sao imutaveis](../adr/0003-versoes-normativas-publicadas-sao-imutaveis.md)
- [ADR 0004 - MVP nao consulta sistemas externos em tempo real](../adr/0004-mvp-nao-consulta-sistemas-externos-em-tempo-real.md)
- [ADR 0005 - Uma organizacao por instalacao no MVP](../adr/0005-uma-organizacao-por-instalacao-no-mvp.md)
