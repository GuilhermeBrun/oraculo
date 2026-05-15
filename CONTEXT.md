# Oraculo

O Oraculo e um sistema de consulta assistida por IA para orientar respostas e recomendacoes a partir de conhecimento documental controlado.

## Language

**Fonte Normativa**:
Documento, regra, politica ou procedimento que define o que deve ser seguido como verdade operacional.
_Avoid_: rule, regra solta, documento mandatorio

**Regra Cadastrada**:
**Fonte Normativa** criada diretamente no Oraculo, sem depender de arquivo anexado.
_Avoid_: anotacao, regra solta, texto livre

**Excecao Normativa**:
Condicao documentada em **Fonte Normativa** que limita ou altera a aplicacao de uma regra geral.
_Avoid_: excecao, caso especial, interpretacao

**Fonte Normativa Global**:
**Fonte Normativa** que se aplica a todos os projetos, times e usuarios dentro do escopo do Oraculo.
_Avoid_: regra geral, regra principal, documento corporativo

**Fonte Normativa de Area**:
**Fonte Normativa** que se aplica a uma area, processo, time ou projeto especifico e complementa as fontes globais.
_Avoid_: regra local, regra do time, documento do projeto, fonte do projeto

**Fonte de Apoio**:
Documento explicativo que ajuda a interpretar um assunto, mas nao prevalece sobre uma **Fonte Normativa** em caso de conflito.
_Avoid_: documento comum, anexo, material auxiliar

**Traducao Normativa**:
Versao traduzida de uma **Fonte Normativa** que facilita leitura, mas nao substitui a autoridade da fonte original.
_Avoid_: documento traduzido, versao em outro idioma, traducao

**Fonte de Apoio da Conversa**:
Fonte anexada para contextualizar uma conversa especifica, sem validade permanente fora dela.
_Avoid_: anexo temporario, documento da conversa, arquivo enviado

**Analise de Documento**:
Uso do Oraculo para extrair ou interpretar fatos de uma **Fonte de Apoio da Conversa**.
_Avoid_: leitura de arquivo, resumo de anexo, analisar anexo

**Qualidade de Extracao**:
Grau de confianca de que o conteudo textual foi extraido corretamente de uma fonte.
_Avoid_: OCR, leitura do arquivo, qualidade do documento

**Texto Normativo Revisado**:
Texto corrigido por um **Curador** antes da **Publicacao Normativa** para representar fielmente a fonte original.
_Avoid_: texto corrigido, revisao manual, transcricao

**Trecho Normativo**:
Parte identificavel de uma fonte que sustenta uma regra, excecao, procedimento ou referencia especifica.
_Avoid_: secao, chunk, pedaco do documento

**Resumo de Apoio**:
Sintese de uma **Fonte de Apoio** ou **Fonte de Apoio da Conversa** sem autoridade normativa.
_Avoid_: resumo, sumario, entendimento do documento

**Treinamento Guiado**:
Experiencia de aprendizado conduzida pelo Oraculo a partir de fontes vigentes para ensinar regras, processos ou procedimentos.
_Avoid_: onboarding, curso, tutorial

**Trilha Curada**:
Sequencia de aprendizado definida por **Curador** dentro de um **Treinamento Guiado**.
_Avoid_: trilha, modulo, curso curado

**Bloco de Treinamento**:
Parte de uma **Trilha Curada** escrita por **Curador** e vinculada a referencias documentais.
_Avoid_: aula, conteudo, secao da trilha

**Revisao de Trilha**:
Estado em que uma **Trilha Curada** precisa ser revisada porque sua base documental mudou.
_Avoid_: trilha desatualizada, revisar curso, pendente de revisao

**Progresso de Treinamento**:
Estado de conclusao de um **Usuario Identificado** em uma **Trilha Curada**.
_Avoid_: progresso, conclusao, ultima aula

**Memoria da Conversa**:
Informacoes mantidas ao longo de uma conversa para preservar contexto imediato sem se tornarem fonte normativa.
_Avoid_: historico da conversa, contexto conversacional, memoria da IA

**Pratica Informal**:
Comportamento relatado ou observado que descreve como algo costuma acontecer, sem autoridade normativa.
_Avoid_: costume, pratica real, jeito que fazem

**Curador**:
Pessoa autorizada a publicar ou revisar fontes que podem orientar respostas do Oraculo.
_Avoid_: admin, aprovador, gestor

**Fonte Sensivel**:
Fonte que nao deve ser disponibilizada no **Acesso Compartilhado** por conter informacao restrita, pessoal ou inadequada para todos os usuarios habilitados.
_Avoid_: documento confidencial, arquivo restrito, dado sensivel

**Publicacao Normativa**:
Ato explicito de tornar uma fonte aplicavel como **Fonte Normativa**.
_Avoid_: upload, anexo, cadastro de documento

**Rascunho Normativo**:
Fonte preparada para revisao antes da **Publicacao Normativa**, sem autoridade para orientar respostas.
_Avoid_: draft, pre-publicacao, regra pendente

**Sugestao Normativa**:
Proposta enviada por **Usuario Identificado** para avaliacao de um **Curador** antes de virar fonte normativa.
_Avoid_: sugestao de regra, pedido de cadastro, fonte candidata

**Metadados Normativos**:
Informacoes minimas que identificam autoridade, vigencia e aplicabilidade de uma **Fonte Normativa**.
_Avoid_: dados do arquivo, propriedades, cadastro

**Nota de Mudanca**:
Resumo informado pelo **Curador** sobre o que mudou em uma nova **Versao Normativa**.
_Avoid_: changelog, justificativa, observacao

**Recomendacao Operacional**:
Orientacao do Oraculo sobre uma acao que o usuario deve ou pode executar com base em fonte documental suficiente.
_Avoid_: sugestao, palpite, resposta provavel

**Base Normativa Suficiente**:
Conjunto de **Fontes Normativas** aplicaveis que sustenta uma **Recomendacao Operacional** sem depender de inferencia fraca.
_Avoid_: evidencia fraca, fonte relacionada, contexto aproximado

**Recusa Documental**:
Resposta do Oraculo quando nao ha **Base Normativa Suficiente** para sustentar uma recomendacao.
_Avoid_: erro, nao sei, falha de resposta

**Pergunta Hipotetica**:
Pergunta que pede resposta baseada em regra, fato ou condicao nao vigente ou nao documentada como aplicavel.
_Avoid_: simulacao, e se, cenario hipotetico

**Comparacao de Opcoes Reais**:
Analise de duas ou mais alternativas concretas contra fontes vigentes e aplicaveis.
_Avoid_: simulacao, comparacao hipotetica, escolher opcao

**Lacuna Normativa**:
Tema recorrente sem **Base Normativa Suficiente** que deve ser avaliado por curadoria.
_Avoid_: gap, falta de regra, demanda de documentacao

**Prioridade de Lacuna**:
Importancia relativa de uma **Lacuna Normativa** para orientar curadoria.
_Avoid_: prioridade, criticidade, ranking

**Encerramento de Lacuna**:
Decisao de curadoria que encerra uma **Lacuna Normativa** sem necessariamente criar nova fonte normativa.
_Avoid_: fechar gap, rejeitar demanda, wontfix

**Ausencia de Evidencia**:
Resultado em que o Oraculo nao encontra fonte suficiente no **Escopo de Consulta**, sem afirmar que a regra inexiste.
_Avoid_: nao existe regra, ausencia de regra, inexistente

**Referencia Documental**:
Identificacao auditavel da fonte usada em uma resposta, incluindo documento, versao ou data, e localizador como secao, pagina ou trecho.
_Avoid_: citacao generica, link, fonte

**Versao Ativa**:
Versao de uma **Fonte Normativa** que esta vigente para perguntas sem recorte temporal explicito.
_Avoid_: versao atual, ultima versao, documento valido

**Versao Normativa**:
Instancia imutavel de uma **Fonte Normativa** publicada.
_Avoid_: versao do arquivo, revisao, edicao

**Fonte Substituida**:
Versao de uma **Fonte Normativa** que deixou de ser vigente porque outra versao passou a ocupar seu lugar.
_Avoid_: fonte vencida, versao antiga, documento obsoleto

**Comparacao Normativa**:
Analise das diferencas entre duas ou mais versoes de uma **Fonte Normativa**.
_Avoid_: diff, comparacao de versoes, o que mudou

**Consulta Temporal**:
Pergunta cuja resposta depende das fontes vigentes em uma data ou periodo especifico.
_Avoid_: consulta historica, pergunta antiga, auditoria

**Escopo de Consulta**:
Limite organizacional ou contextual que define quais fontes podem ser usadas para responder uma pergunta.
_Avoid_: contexto, projeto atual, filtro, area atual

**Area de Conhecimento**:
Escopo nomeado pelo **Curador** para agrupar fontes e perguntas por area, processo, time ou projeto.
_Avoid_: area, categoria, projeto

**Acesso Compartilhado**:
Modelo em que as fontes publicadas no Oraculo podem ser consultadas por todos os usuarios habilitados no sistema.
_Avoid_: acesso publico, permissao geral, visibilidade total

**Organizacao**:
Unidade maxima de uso do Oraculo no MVP, com uma base compartilhada de fontes e usuarios habilitados.
_Avoid_: tenant, empresa, workspace

**Usuario Identificado**:
Pessoa autenticada que usa o Oraculo e pode ser associada a perguntas, respostas, feedbacks ou publicacoes.
_Avoid_: usuario, login, pessoa

**Ambiguidade Operacional**:
Falta de informacao que pode alterar a **Recomendacao Operacional** correta.
_Avoid_: duvida, pergunta incompleta, contexto faltante

**Informacao Necessaria**:
Dado minimo que resolve uma **Ambiguidade Operacional** para permitir uma recomendacao correta.
_Avoid_: campo obrigatorio, pergunta de triagem, detalhe

**Plano de Acao**:
Sequencia de passos recomendada pelo Oraculo a partir de uma fonte documental rastreavel.
_Avoid_: checklist livre, roteiro, passo a passo inventado

**Artefato Assistido**:
Texto ou material preparado pelo Oraculo a partir de dados do usuario e fontes aplicaveis, sem executar a acao pelo usuario.
_Avoid_: minuta, e-mail, documento gerado

**Artefato Editado**:
Versao modificada por **Usuario Identificado** a partir de um **Artefato Assistido**.
_Avoid_: edicao, versao final, documento do usuario

**Execucao Externa**:
Acao realizada pelo Oraculo em outro sistema alem de responder ou preparar orientacoes para o usuario.
_Avoid_: automacao, integracao ativa, acao automatica

**Conflito Documental**:
Divergencia entre fontes aplicaveis que pode alterar a resposta ou a recomendacao do Oraculo.
_Avoid_: inconsistencia, divergencia, regra duplicada

**Alerta de Conflito**:
Aviso ao **Curador** de que uma fonte em revisao parece divergir de fonte ja publicada.
_Avoid_: bloqueio, erro de conflito, validacao

**Justificativa de Conflito**:
Motivo registrado pelo **Curador** ao publicar uma fonte apesar de **Alerta de Conflito**.
_Avoid_: justificativa, comentario, motivo do conflito

**Estilo de Resposta**:
Forma como o Oraculo apresenta uma resposta sem alterar a autoridade documental exigida.
_Avoid_: tom, nivel de detalhe, resposta opinativa

**Conhecimento Documental**:
Conhecimento obtido das fontes permitidas pelo **Escopo de Consulta**.
_Avoid_: base interna, documentos, contexto

**Conhecimento Geral**:
Conhecimento externo as fontes permitidas pelo **Escopo de Consulta**.
_Avoid_: conhecimento da IA, internet, senso comum

**Dado Operacional Externo**:
Informacao que vive em sistema externo ao Oraculo e representa estado operacional em tempo real ou quase real.
_Avoid_: dado do ERP, dado do sistema, informacao em tempo real

**Orientacao de Verificacao**:
Indicacao rastreavel de onde ou como o usuario deve verificar uma informacao que o Oraculo nao possui.
_Avoid_: encaminhamento, proximo passo, consulte o sistema

**Busca de Fontes**:
Consulta manual por fontes publicadas ou rascunhos permitidos, independente de uma resposta conversacional.
_Avoid_: pesquisa, busca manual, biblioteca

**Exportacao de Resposta**:
Registro compartilhavel de uma resposta do Oraculo com referencias e data, sem criar nova fonte normativa.
_Avoid_: relatorio, PDF da resposta, compartilhamento

**Rastro de Auditoria**:
Registro que permite reconstruir por que uma resposta operacional foi dada em um momento especifico.
_Avoid_: historico, log, registro

**Feedback de Resposta**:
Avaliacao de usuario sobre a utilidade ou correcao percebida de uma resposta do Oraculo.
_Avoid_: aprendizado, treinamento, correcao automatica

## Relationships

- Uma **Fonte Normativa** prevalece sobre uma **Fonte de Apoio** quando ambas tratam do mesmo assunto de forma conflitante.
- Uma **Regra Cadastrada** e uma **Fonte Normativa** quando possui **Metadados Normativos** e **Publicacao Normativa**.
- O tipo de origem da **Fonte Normativa** nao define sua autoridade.
- Uma **Fonte Normativa Global** prevalece sobre uma **Fonte Normativa de Area** quando ambas tratam do mesmo assunto de forma conflitante.
- Uma **Excecao Normativa** so pode ser aplicada quando esta documentada em **Fonte Normativa**.
- Uma **Excecao Normativa** de area pode limitar uma **Fonte Normativa Global** quando publicada explicitamente como excecao.
- Uma divergencia de area so e **Excecao Normativa** quando identifica a regra geral limitada e suas condicoes de aplicacao.
- Uma **Excecao Normativa** vale enquanto estiver na **Versao Ativa**, sem prazo automatico no escopo inicial.
- Uma resposta que aplica **Excecao Normativa** deve apresentar a regra geral, a excecao aplicavel e a conclusao.
- Uma resposta que aplica **Excecao Normativa** deve explicitar que a conclusao depende dessa excecao.
- Uma **Fonte de Apoio** complementa a resposta quando nao contradiz uma **Fonte Normativa**.
- Uma **Traducao Normativa** nao prevalece sobre a fonte original quando houver divergencia.
- Uma **Pratica Informal** pode ser tratada como **Fonte de Apoio**, mas nao prevalece sobre **Fonte Normativa**.
- Uma **Fonte de Apoio da Conversa** pode contextualizar a pergunta, mas nao se torna fonte permanente.
- Uma **Fonte de Apoio da Conversa** nao autoriza uma **Recomendacao Operacional** sem **Base Normativa Suficiente**.
- Uma **Analise de Documento** pode extrair fatos de uma **Fonte de Apoio da Conversa**, mas nao transforma esses fatos em **Fonte Normativa**.
- Baixa **Qualidade de Extracao** impede que o trecho incerto sustente **Recomendacao Operacional**.
- Uma fonte com baixa **Qualidade de Extracao** pode ser **Fonte de Apoio** quando a limitacao for explicitada.
- Um **Texto Normativo Revisado** pode sustentar **Publicacao Normativa** quando preserva fidelidade a fonte original.
- Uma fonte grande pode conter varios **Trechos Normativos**.
- Um **Resumo de Apoio** nao e **Recomendacao Operacional**.
- Um **Treinamento Guiado** deve ser baseado em fontes vigentes e indicar a base documental usada.
- Um **Treinamento Guiado** nao substitui **Recomendacao Operacional** para um caso real.
- Um **Treinamento Guiado** pertence a uma area separada da conversa operacional.
- Uma resposta conversacional pode sugerir **Treinamento Guiado** relevante quando houver relacao com a pergunta.
- Uma **Trilha Curada** e a forma principal de **Treinamento Guiado** no MVP.
- Uma **Trilha Curada** deve ser criada manualmente por **Curador** no MVP.
- Uma **Trilha Curada** pode permitir perguntas conversacionais sem deixar de citar a base documental usada.
- Uma **Trilha Curada** apresenta conteudo guiado sem perguntas de verificacao no MVP.
- Uma **Trilha Curada** e composta por **Blocos de Treinamento**.
- Um **Bloco de Treinamento** deve indicar as **Referencias Documentais** que sustentam seu conteudo.
- Uma **Trilha Curada** entra em **Revisao de Trilha** quando uma fonte normativa usada por ela e substituida.
- Uma **Trilha Curada** em **Revisao de Trilha** deve ficar indisponivel para usuarios comuns e visivel para **Curador**.
- O **Progresso de Treinamento** deve ser preservado por **Usuario Identificado**.
- O **Progresso de Treinamento** deve ser preservado quando uma **Trilha Curada** e revisada.
- Blocos alterados em uma **Revisao de Trilha** devem ser sinalizados para usuarios que ja os concluiram.
- A **Memoria da Conversa** pode contextualizar perguntas, mas nao substitui **Fonte Normativa**.
- Uma fonte anexada sem **Publicacao Normativa** e uma **Fonte de Apoio**.
- Uma **Sugestao Normativa** nao sustenta **Recomendacao Operacional**.
- Uma **Sugestao Normativa** deve ser avaliada por **Curador** antes de **Publicacao Normativa**.
- Um **Rascunho Normativo** nao sustenta **Recomendacao Operacional**.
- Um **Rascunho Normativo** deve ser visivel apenas para **Curador**.
- A **Busca de Fontes** deve mostrar **Rascunho Normativo** apenas para **Curador**.
- Uma **Publicacao Normativa** deve ser feita por um **Curador**.
- Uma **Publicacao Normativa** exige apenas um **Curador** no MVP.
- O MVP diferencia apenas **Usuario Identificado** e **Curador** como papeis de uso.
- Uma **Publicacao Normativa** exige **Metadados Normativos**.
- Uma **Publicacao Normativa** exige **Qualidade de Extracao** suficiente nos trechos normativos.
- Uma **Publicacao Normativa** pode usar **Texto Normativo Revisado** por **Curador**.
- Uma **Publicacao Normativa** pode gerar **Alerta de Conflito** antes da publicacao.
- Uma **Publicacao Normativa** com **Alerta de Conflito** exige **Justificativa de Conflito**.
- Uma nova **Versao Normativa** deve incluir **Nota de Mudanca**.
- Um **Curador** deve impedir que uma **Fonte Sensivel** seja publicada no **Acesso Compartilhado**.
- Uma resposta do Oraculo deve respeitar o **Escopo de Consulta**.
- O **Acesso Compartilhado** permite que usuarios habilitados consultem as fontes publicadas no Oraculo.
- Uma instalacao do Oraculo atende uma **Organizacao** no MVP.
- Todo uso do Oraculo deve estar associado a um **Usuario Identificado**.
- O **Escopo de Consulta** explicito prevalece sobre o escopo inferido.
- Quando o **Escopo de Consulta** nao esta claro e pode alterar a recomendacao, ha **Ambiguidade Operacional**.
- Uma **Area de Conhecimento** deve ter nome canonico e descricao curta.
- Um **Curador** pode criar uma **Area de Conhecimento**.
- Uma **Fonte Normativa Global** entra no **Escopo de Consulta** quando se aplica ao assunto perguntado.
- Uma **Fonte Normativa de Area** entra no **Escopo de Consulta** somente quando a area, processo, time ou projeto correspondente se aplica a pergunta.
- Uma **Fonte Normativa de Area** pode estar vinculada a mais de uma **Area de Conhecimento**.
- Uma **Recomendacao Operacional** exige **Base Normativa Suficiente**.
- Uma **Recomendacao Operacional** deve incluir uma **Referencia Documental**.
- Uma **Referencia Documental** usada em **Recomendacao Operacional** deve incluir trecho curto da fonte quando disponivel.
- Uma **Referencia Documental** deve indicar quando o trecho citado vem de **Texto Normativo Revisado**.
- Cada parte relevante de uma **Recomendacao Operacional** deve apontar para a **Referencia Documental** que a sustenta.
- A falta de **Base Normativa Suficiente** deve gerar **Recusa Documental**.
- Uma **Recusa Documental** deve informar o **Escopo de Consulta**, fontes relacionadas encontradas e a informacao ou curadoria necessaria.
- Uma **Recusa Documental** pode encaminhar para **Sugestao Normativa** quando a lacuna exigir curadoria.
- Recusas recorrentes sobre o mesmo tema podem formar uma **Lacuna Normativa**.
- A **Prioridade de Lacuna** deve considerar volume de perguntas e risco percebido.
- Um **Encerramento de Lacuna** deve registrar o motivo da decisao de curadoria.
- Um **Encerramento de Lacuna** pode orientar **Recusa Documental** futura sem virar **Fonte Normativa**.
- O Oraculo nao responde **Pergunta Hipotetica** no escopo inicial.
- Ao recusar **Pergunta Hipotetica**, o Oraculo pode redirecionar para a regra vigente aplicavel quando houver **Base Normativa Suficiente**.
- O Oraculo pode responder **Comparacao de Opcoes Reais** quando as alternativas forem concretas e houver **Base Normativa Suficiente**.
- Uma **Comparacao de Opcoes Reais** deve listar conformidade e lacunas por opcao, sem escolher uma opcao recomendada.
- Uma **Ausencia de Evidencia** nao deve ser apresentada como inexistencia absoluta de regra.
- Um **Plano de Acao** deve derivar de passos rastreaveis em fontes documentais.
- Um **Plano de Acao** nao implica **Execucao Externa**.
- Um **Artefato Assistido** deve indicar as fontes aplicaveis usadas para sua elaboracao.
- Um **Artefato Assistido** deve separar o texto gerado da base documental usada.
- Um **Artefato Assistido** nao implica **Execucao Externa**.
- Um **Artefato Editado** nao altera **Fonte Normativa** nem a base documental usada pelo **Artefato Assistido** original.
- Um **Artefato Editado** so vira registro persistente quando o usuario salva ou exporta explicitamente.
- Um **Artefato Editado** pode ser submetido explicitamente como **Sugestao Normativa** ou **Fonte de Apoio**.
- Uma **Fonte de Apoio** sem **Base Normativa Suficiente** nao autoriza uma **Recomendacao Operacional**.
- Uma **Ambiguidade Operacional** deve ser resolvida antes de uma **Recomendacao Operacional**.
- O Oraculo deve solicitar apenas a **Informacao Necessaria** para resolver uma **Ambiguidade Operacional**.
- Um **Conflito Documental** que afeta a resposta deve ser informado ao usuario.
- Um **Conflito Documental** deve ser identificado no nivel de **Trecho Normativo** quando possivel.
- Um **Alerta de Conflito** orienta curadoria, mas nao e **Conflito Documental** confirmado por si so.
- O **Estilo de Resposta** nao altera a exigencia de **Base Normativa Suficiente**.
- O **Estilo de Resposta** pode variar sem remover conclusao, **Referencia Documental** ou limitacoes relevantes.
- Quando a pergunta permitir decisao binaria, a resposta deve apresentar a conclusao direta antes da justificativa.
- Pedido do usuario para ignorar regras nao altera a exigencia de **Base Normativa Suficiente** para **Recomendacao Operacional**.
- Uma **Recomendacao Operacional** deve ser sustentada por **Conhecimento Documental**.
- **Conhecimento Geral** pode apoiar explicacao, mas nao sustenta **Recomendacao Operacional**.
- **Dado Operacional Externo** nao faz parte do **Conhecimento Documental** no MVP.
- Uma resposta sobre **Dado Operacional Externo** pode incluir **Orientacao de Verificacao** quando houver fonte documental que sustente essa orientacao.
- A **Busca de Fontes** permite localizar fontes diretamente sem depender de conversa com IA.
- A **Busca de Fontes** deve mostrar **Versao Ativa** por padrao e **Fonte Substituida** apenas por historico, filtro explicito, **Consulta Temporal** ou **Comparacao Normativa**.
- Uma **Recomendacao Operacional** deve produzir **Rastro de Auditoria**.
- Um **Rastro de Auditoria** deve preservar pergunta, resposta, **Escopo de Consulta**, **Referencia Documental**, versoes aplicadas e **Conflito Documental** relevante.
- Uma **Exportacao de Resposta** nao e **Fonte Normativa**.
- Uma **Exportacao de Resposta** deve preservar conclusao, data, **Referencia Documental** e trecho curto usado.
- Um **Feedback de Resposta** pode indicar necessidade de revisao, mas nao altera a fonte de verdade sem curadoria.
- Uma pergunta sem recorte temporal deve usar a **Versao Ativa**.
- Uma nova **Versao Normativa** publicada se torna **Versao Ativa** imediatamente.
- Uma **Versao Normativa** publicada nao deve ser editada; mudancas criam nova versao.
- Qualquer **Curador** pode publicar nova **Versao Normativa** para substituir uma fonte publicada.
- Uma **Consulta Temporal** deve usar as fontes vigentes no periodo perguntado.
- Uma **Fonte Substituida** nao sustenta **Recomendacao Operacional** para pergunta sem recorte temporal.
- Uma **Fonte Substituida** pode sustentar uma **Consulta Temporal** quando estava vigente no periodo perguntado.
- Uma resposta antiga baseada em **Fonte Substituida** deve sinalizar que a fonte usada nao e mais a **Versao Ativa** quando for revisitada.
- Uma **Comparacao Normativa** deve citar as versoes comparadas e indicar qual e a **Versao Ativa** quando houver recomendacao atual.

## Example dialogue

> **Dev:** "Se uma apresentacao antiga contradiz um procedimento global, qual fonte o Oraculo deve seguir?"
> **Domain expert:** "O Oraculo deve seguir a **Fonte Normativa**, citar essa fonte e sinalizar que a apresentacao e apenas uma **Fonte de Apoio** conflitante."

## Flagged ambiguities

- "documentos, rules e procedimentos" foi usado para falar tanto de fontes obrigatorias quanto de materiais explicativos; resolvido: **Fonte Normativa** e **Fonte de Apoio** sao conceitos distintos.
- "regra global" e "regra local" foram usados como niveis de autoridade; resolvido: **Fonte Normativa Global** prevalece sobre **Fonte Normativa de Area**.
- "recomendar" pode significar orientar uma acao ou apenas comentar uma possibilidade; resolvido: **Recomendacao Operacional** exige **Base Normativa Suficiente**.
- "nao encontrei resposta" deve ser uma resposta auditavel; resolvido: **Recusa Documental** explica a falta de base e o proximo caminho.
- "nao existe regra" foi separado de "nao encontrei regra"; resolvido: **Ausencia de Evidencia** fala apenas do que foi encontrado no **Escopo de Consulta**.
- "regra" pode vir de arquivo ou do proprio sistema; resolvido: **Regra Cadastrada** pode ser **Fonte Normativa** sem arquivo anexado.
- "versao atual" foi usado para perguntas sem data; resolvido: **Versao Ativa** e **Consulta Temporal** separam validade presente de validade historica.
- "fonte vencida" foi usado para documentos fora de vigencia; resolvido: **Fonte Substituida** so pode sustentar resposta temporal.
- "editar regra publicada" foi separado de criar nova vigencia; resolvido: **Versao Normativa** publicada e imutavel.
- "vigencia futura" foi rejeitada no escopo inicial; resolvido: nova **Versao Normativa** entra em vigor imediatamente ao ser publicada.
- "anexar documento" e "criar regra" foram tratados como acoes diferentes; resolvido: fonte anexada vira **Fonte Normativa** somente por **Publicacao Normativa**.
- "contexto" pode significar assunto, projeto ou fontes disponiveis; resolvido: **Escopo de Consulta** define quais fontes podem responder uma pergunta.
- "projeto" ficou estreito demais para representar escopo; resolvido: **Fonte Normativa de Area** cobre area, processo, time ou projeto.
- "pergunta incompleta" pode ou nao impedir resposta; resolvido: **Ambiguidade Operacional** impede **Recomendacao Operacional** quando altera a acao correta.
- "recomendar o que deve ser feito" pode significar uma resposta ou uma sequencia; resolvido: **Plano de Acao** e permitido quando os passos sao rastreaveis.
- "conflito" foi tratado como detalhe tecnico e como informacao ao usuario; resolvido: **Conflito Documental** deve ser visivel quando afeta a resposta.
- "mais pratico" ou "mais opinativo" altera apenas o **Estilo de Resposta**, nao a autoridade necessaria para recomendar.
- "ignorar regras" foi rejeitado para recomendacao operacional; resolvido: o Oraculo nao burla **Fonte Normativa** a pedido do usuario.
- "e se" ou simulacao hipotetica foi rejeitada no escopo inicial; resolvido: **Pergunta Hipotetica** nao deve ser respondida pelo Oraculo.
- "IA" pode significar responder pela base documental ou pelo conhecimento geral do modelo; resolvido: **Conhecimento Documental** sustenta recomendacao, **Conhecimento Geral** apenas apoia explicacao.
- "historico" pode significar conversa comum ou evidencias de decisao; resolvido: **Rastro de Auditoria** reconstrui uma **Recomendacao Operacional** no tempo.
- "documento anexado" pode significar fonte temporaria ou fonte permanente; resolvido: **Fonte de Apoio da Conversa** vale somente para a conversa.
- "lembrar da conversa" nao significa criar fonte de verdade; resolvido: **Memoria da Conversa** preserva contexto, nao autoridade normativa.
- "responsavel pela fonte" foi considerado, mas nao e obrigatorio no escopo inicial dos **Metadados Normativos**.
- "tags livres" foram consideradas para busca e navegacao, mas nao sao necessarias no escopo inicial.
- "treinamento/onboarding" foi incluido no escopo inicial como **Treinamento Guiado**, separado de recomendacao para caso real.
- "trilha gerada por IA" foi rejeitada no escopo inicial; resolvido: **Trilha Curada** e criada manualmente por **Curador**.
- "recomendar" pode ser confundido com agir em sistemas externos; resolvido: **Plano de Acao** orienta o usuario, mas nao realiza **Execucao Externa**.
- "permissao de acesso" foi considerada por usuario e por base compartilhada; resolvido: no escopo inicial, o Oraculo usa **Acesso Compartilhado** para fontes publicadas.
- "feedback" pode ser confundido com aprendizado automatico; resolvido: **Feedback de Resposta** nao altera fontes ou recomendacoes sem curadoria.
