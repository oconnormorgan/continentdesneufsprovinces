<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0">
      <v-card class="pa-0 ma-0" width="100%">
        <v-breadcrumbs :items="items" class="pa-1 mx-5">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-card>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col cols="8" class="d-flex justify-center pa-0 ma-0">
        <v-card-title class="ma-0 pa-0">Titre</v-card-title>
      </v-col>
      <v-col cols="4">
        <v-card class="d-flex flex-column align-center">
          <v-card-title class="text-subtitle-1 ma-0 pa-0">Paramétre</v-card-title>
          <v-row class="d-flex justify-center ma-0 pa-0">
            <v-col cols="6" md="3" class="d-flex justify-center ma-0 pa-0" width="100%">
              <v-btn icon small @click="decrease">
                <v-icon>mdi-format-font-size-decrease</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" md="3" class="d-flex justify-center ma-0 pa-0" width="100%">
              <v-btn icon small @click="increase">
                <v-icon>mdi-format-font-size-increase</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" md="3" class="d-flex justify-center ma-0 pa-0" width="100%">
              <v-btn icon small>
                <v-icon>mdi-brightness-3</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" md="3" class="d-flex justify-center ma-0 pa-0" width="100%">
              <v-btn icon small>
                <v-icon>mdi-microphone</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" md="3" class="d-flex justify-center ma-0 pa-0" width="100%">
              <v-btn icon small>
                <v-icon>mdi-human</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-0 ma-0 d-flex flex-column" width="100%">
          <v-card-actions width="100%" class="d-flex justify-end">
            <!-- Début dialog -->

            <v-dialog v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon icon class="pa-2">mdi-fullscreen</v-icon>
                </v-btn>
              </template>
              <v-card class="ma-0 pa-0">
                <v-toolbar dark color="deep-black" class="ma-0 pa-0" width="100%">
                  <v-row class="d-flex justify-space-between align-center px-5" width="100%">
                    <div class="d-flex align-center">
                      <v-btn icon dark @click="dialog = false" class="px-2">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title class="px-2">Chapitre XX</v-toolbar-title>
                    </div>
                    <div>
                      <v-btn icon small class="px-2" @click="decrease">
                        <v-icon>mdi-format-font-size-decrease</v-icon>
                      </v-btn>
                      <v-btn icon small class="px-2" @click="increase">
                        <v-icon>mdi-format-font-size-increase</v-icon>
                      </v-btn>
                      <v-btn icon small class="px-2">
                        <v-icon>mdi-brightness-3</v-icon>
                      </v-btn>
                      <v-btn icon small class="px-2">
                        <v-icon>mdi-microphone</v-icon>
                      </v-btn>
                      <v-btn icon small class="px-2">
                        <v-icon>mdi-human</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-toolbar>
                <v-card-text
                  class="ma-0 pa-5 blue-grey lighten-5"
                  :style="'font-size:'+police+'px;'"
                >
                  Je vais bientôt entrer dans l'académie des Montagnes Bleues. Mon avenir est tracé ! Pour garder en mémoire mes aventures je vais coucher sur papier ce que j'ai vécu. Mais d'abord, faisons un bref résumé de qui je suis...
                  Je m'appelle Angelus Noircorbeau, fils de Ygerne Noircorbeau serveuse dans une taverne. D'après ma mère mon père serait mort peu après ma naissance. Je suis né pendant un mois de grande chaleur, et ma mère me disait que ce jour là la neige tomba subitement. Avec cela, j’ai longtemps cru que j’avais un grand destin, mais la réalité était tout autre ! Comme tous les enfants, à 6 ans j'ai passé le test pour vérifier ma puissance martial sur la pierre de divination... Et le résultat était plus qu’affligeant... j'ai fait 4. Plus tard, à 10 ans, j'ai fait l'autre test, celui pour la puissance spirituelle... résultat sans appel ! La pierre ne s’est pas illuminée du tout, même pas un frémissement de lumière. Imaginez ma tête, moi qui croyais avoir un grand destin, je n'avais rien, même pas de familier. Tout le monde en a un, et ma mère une fois m'a montré le sien, je me souviens parfaitement, c'était le jour ou j'ai passé mon premier test avec la pierre de divination. Ce jour là, j'avais retenu mes larmes a l'école, je me faisais suffisamment charié comme ça. Une fois rentré chez moi, j'ai pleuré toutes les larmes de mon corps. Ma mère, pour me rassurer, m'a dit alors « Rassure toi, mon petit ange, tu es mon fils et tu es fort. Je vais te montrer quelque chose ». A ce moment là, elle fit apparaître un corbeau noir avec des reflets bleus, signe distinctif, le corbeau avait une petite barbiche blanche. Ce dernier me dit « peu de gens savent matérialiser un familier » et ma mère repris « si je peux le faire, alors tu le peux aussi ». Ça m'avait rassuré, et lorsque le corbeau disparu, ma mère devint chancelante, me sourit, et me répondit que c'était normal, que je n'avais pas à m'inquiéter, qu'elle allait se reposer un peu. Oui, j'étais le digne descendant de ma mère, alors tôt ou tard, je parviendrais à devenir fort. Mais après le résultat du dernier test je compris que ce n'était pas le cas. J'avais sûrement dû hériter de mon père... Peu importe, ce n'était pas si grave après tout. Je gardais espoir qu'un jour mes pouvoirs se dévoilent, et que je serais différent des autres.
                  N'ayant ni force martiale, ni force spirituelle, je devais chercher un travail qui ne demandait ni l'un ni l'autre. Après mes 10 ans j'enchainais les petit boulots, mais à chaque fois je me faisait renvoyer. Et à chaque fois pour les même raisons : trop tête en l'air ; toujours dans la lune ; rêvasse trop... j'en passe et des meilleurs. J’étais doué dans tout ce que je faisait, mais... Évidemment, si le travail ne me plait pas, mon esprit divague vers des aventures plus agréables. Ca n'empêche pas certains artisans de m'embaucher de temps à autre pour une journée, voir deux, mais rarement plus. Sur le court terme, je suis très concentré. Après quatre ans de changement de travail j'avais une base dans pratiquement tous les métiers de la ville. Lorsque vinrent mes 14 ans, j'entrepris de rejoindre une caravane de marchandise. Étant habile de mes mains et polyvalent, j'ai réussi à avoir une place pour embarquer avec eux. « L'aventure ! » Me suis-je dis. Oui, l'aventure, je dois bien l'avouer, je me sentais mieux ici que dans d'autres boulots. Je faisais un peu de tout essentiellement du bricolage et de la manutention. J'étais assez mal payé, mais cela m'importait peu, le plus important pour moi, c'était cette liberté de voyager, j'étais un aventurier et c'est tout ce qui comptait ! Après deux années passées en caravane, j'avais appris quelques passes d'armes, à force de soulever les marchandises j'étais un peu plus robuste, et les petites joutes faites avec les guerriers qui gardaient la caravane, m'avaient donné un peu d'endurance et de bonnes bases en combat. Un soir où la caravane était en bivouac, je m'éloignais un peu du campement, c'était la deuxième fois qu'on passait par ici en deux ans. Je me baladais un peu. J'aperçus au loin une étrange ruine. La curiosité me poussa à y jeter un œil. J'avais pris de l'assurance ces deux années, j'allais donc voir. Je m'introduis donc dans la bâtisse. Il y avait des squelettes dépouillés, éparpillés ici et là.
                  Vraisemblablement, l'endroit était truffé de piège. Mais qui dit piège, dit trésor ! J'entrepris de fouiller la zone en prenant soin de ne pas me faire happer par un piège quelconque. Parfois je voyais les pièges, mais la plupart du temps, je m'échappais in extremis d'une lame ou d'une volée de flèche. A croire que quelque part, un dieu ne voulait pas que je meure maintenant. Je fini par arriver dans une pièce, dans laquelle se trouvait une alcôve où gisait un squelette qui portait une cape finement ouvragée et tenait fermement un petit sac à dos très luxueux. Sur le moment, je me suis dit que c'était étrange. Tous les autres morts ne portaient rien. Je me souviens m'être approché lentement suspectant le piège. Une fois à portée de ces restes humains, la capte frémit et s'enroula autour de moi. D'abord, j'ai cru ma dernière heure arrivée, mais elle s'était simplement accrochée à mon cou comme si je l'avais moi-même mise là. Je me suis donc approché du sac pour le récupérer. C'est là que j'aperçu une petite bague noire en métal finement gravée sur un des doigts du cadavre. Je le mis a mon doigt, et pris le sac. Lorsque je regardai à l'intérieur, il n'y avait rien dedans. Mais vraiment rien ! Il n'y avait même pas de fond ! Je décidais de le prendre mais le sac était bien trop petit pour tenir sur mes épaules, je l’ai donc glissé en bandoulière. Etrangement, la route vers la sortie était plus rapide et plus simple qu'à l'arrivée. Une fois au dehors je m'apprêtais à partir en regardant une dernière fois les ruines, qui se volatilisèrent devant mes yeux. J'eus un frisson et une soudaine bouffé de chaleur. Je sentais la cape et le sac se mouvoir sur moi. Pris de panique, j'allais les retirer rapidement mais je me rendis compte que le sac était devenu un vieux sac en cuire simple parfaitement ajusté pour être porté en bandoulière, et la cape était devenue une simple cape en toile grisonnante. Pris de doutes, je jetai un œil à la bague, qui s'était elle aussi modifiée. Ce n'était a présent plus qu'un anneau de bois, mais toujours finement gravé. Je me souviens être resté là un moment, avec les idées confuses et des questions à en perdre la tête. J'avais peur, et pourtant, je me sentais rassuré.
                  Sur la route vers la caravane, je mis un caillou dans le sac, mais impossible de le récupérer. Il doit bien y avoir une solution pour le reprendre me suis-je dis. Et subitement je me suis retrouvé dans un endroit d'une blancheur immaculée. J'aperçus le caillou à mes pieds. Soudain, je suis revenu sur la route... Je fus perplexe, mais j'ai compris comment retrouver le caillou. Il me suffisait de vouloir le récupérer. La deuxième fois j’ai réussi à revenir dans la pièce blanche, et oui il y avait bien un caillou, mais pas que ça. La pièce était remplie de trésors, armes et lingots de toutes sortes. Il y avait des montages de pièces d'or, d'argent, de cuivre et de bronze. Surpris par tant de richesse, je suspectais un instant un piège. Mais vraisemblablement, rien de cela ici. Parcourant du regard la pièce, je me rendais compte qu’il y avait une pièce a ma gauche et une autre a ma droite. Je commencé à fouiner dans tout cet ensemble de bric à brac. Des armes et des armures de toutes sortes, mais mon regard s’attardant sur sur trois tenues exposées sur trois mannequins. Il y avait une armure intégrale toute noire, une étrange robe noire elle aussi, et une tenue de dandy ouvragé avec finesse et luxe. L’ancien propriétaire était à tous les coups un puissant Magus, ou... un grand voleur ! Dans les deux cas, la prudence était de mise ! Il y avait aussi quelques armes bien spécifiques placées sur des piédestals, elles étaient noires elles aussi. Il y avait deux masses d’armes, relativement petites, j’entrepris de les prendre en main. Elles étaient plus légères que ce que j’aurais cru, donnant un petit mouvement circulaires pour les soupesés, deux puissantes masses d’air apparurent et s'écrasèrent contre les armoires qu’il y avait à côté. J’étais surpris et reposa rapidement les armes. Je constatais qu’il y avait beaucoup de vêtements de tous types dans les armoires, et bien évidement je venais de faire une bêtise.. j’allais donc changer de pièce prestement. Partant dans celle de droite, il y avait un verger à perte de vue. J’aperçus un golem s’approcher vers moi lentement. Il portait à la main un très gros panier qu’il déposa à mes pieds avant de repartir. Dans le panier il y avait toutes sortes de fruits et de légumes. Il y avait des choses que je n’avais même jamais vues. Un peu stressé, j’entrepris de visiter l’autre pièce. Une fois à l’intérieur, il y avait une petite bibliothèque, et un bureau. Sur celui-ci il y avait un gros livre. Je passé les yeux sur la bibliothèque mais impossible de comprendre quoi que ce soit. C’était écrit dans un langage que je ne connaissais pas. Pourtant il y avait bien quelques livres qui avaient des titres en langage commun. Mais vraiment très peu. Je m’asseyais au bureau et toucha du doigt le gros livre. Celui-ci s’ouvrit subitement. Et c’est à ce moment là que je fis la connaissance de mon Maitre.
                  “Je vous salue,
                  Je suis Angelus Noircorbeau, héritier de Vladimir Cerberos, l’un des cinq Seigneurs des neufs Provinces. ”
                  J’adore cette présentation ! Bref, pour continuer mon histoire, il se trouve, comme vous l’avez compris, que mon Maître est Vladimir Cerberos. Cela fait plus de 30 000 ans que l’on n’a pas entendu parler de lui. Et ce n’est pas réellement lui que j’ai rencontré. C’est une image rémanente de lui gravée dans le gros livre du bureau. Vladimir ouvrit mon corps à son véritable pouvoir. et me refit faire le test des pierres : la première monta à 98, et la seconde s’illumina tellement qu’elle explosa. J’étais sidéré de constater la force qui était en moi. J’étais heureux et après l’avoir remercié de m’avoir pris sous son aile, je sortais du havre-sac pour reprendre la route vers la caravane. Mais mon corps devenait de plus en plus lourd. Et la douleur arrivait petit à petit. Je commençais à tituber. Sans réellement savoir pourquoi, je me suis mis à courir à toute vitesse, comme si je voulais fuir quelque chose, j’avais peur, je sentais mon heure arriver, alors j’ai fuis. j’ai couru aussi vite que j’ai pus, tombant de temps en temps, je continuais à courir de plus bel. La douleur était atroce. Mes bras prirent en volume, mes jambes et le reste de mon corps aussi. Comme si mes muscles se déchiraient... ces derniers saillant et apparent s’ajustaient dans ma tenue trop lâche pour moi. La douleur était insoutenable, ma vision se brouillait. Je fini par m’écrouler dans une rivière et m’évanouis. Le courant trop fort m’emporta avec lui.
                  Je me réveillais dans une belle chambre joliment décorée, nu et couvert de bandage. Mon premier réflexe fut de chercher du regard mes affaires. Mon havresac et la cape était accrochés près du lit. Je tendais l’oreille et j’entendais au loin une femme chantonner. C’est ici que je fis la connaissance de Lucie Verdillia, une magnifique elfe buveuse de sang. Elle m'a appris à cuisiner des légumes que je n’avais jamais vus, et à entrer dans mon monde intérieur. Je suis tombé amoureux d’elle.. Et ce qui devait arriver arriva… Je perdis ma vertue avec elle. Une femme d’une beauté sans pareille. Après plusieurs semaines à ses côtés, elle m’incita à prendre la route. J’avais encore des choses à faire. Je me devais de me diriger vers une petite ville de campagne qui accueillait bientôt les sélections pour les académies. Et mon maître m’avait bien indiqué que je devais absolument m’y rendre. Je pris la route et m’y rendis.
                  Il y eut bien quelques péripéties sur la route, mais je n’ai pas beaucoup de temps devant moi, alors je vais à l’essentiel, je ferais en sorte de tenir mon journal de bord dès que possible les prochaines fois.
                  Une fois arrivé dans la ville, je fis pas mal de connaissances, j’achetais ma première blague à tabac, ma première pipe. Je fis aussi mes premiers duels en arène. J’étais devenu adepte de niveau un. Et mon élément de prédilection est la glace. Je me pris d’amitié pour un fantôme près des ruines sur une petite coline où je me détends le soir. Elle m’offrit trois graines d’une plante. J’en plantai une pour la remercier et gardai les deux autres. C’est aussi ici que je passai adepte de niveau deux. Je pris le temps d’affiner mes attaques, et de façonner mon monde intérieur. Ce dernier était totalement enneigé et prit petit à petit des couleurs. j’avais à présent un petit lac où se déversait une petite cascade, mon cristal de pouvoir intérieur surplombait un îlot au centre du lac, la température y était douce et agréable. a coté du lac j’ai recrée la maison de mon enfance. J’ai aussi pris le temps d’envoyer une lettre à ma mère pour l’avertir que j’étais toujours vivant. Puis vint l’heure où je devais prendre la caravane pour aller à l’académie des montagnes bleues.
                  Dans la caravane je fis la connaissance de Cyluh et Luhcy. Deux magnifiques jeunes femmes qui ne me laissaient pas indifférent. Je les avais débarrassées d’un envahisseur en feintant que l’une d’elle était ma petite amie. Luhcy semble maîtriser le froid, et Cyluh la chaleur. Je ne m’attardais pas, je ne voulais pas passer pour un envahisseur à mon tour. J’allais donc m’installer dans une cabine seul. Et c’est là que j’ai fait la connaissance de Neville GRAYRATIS, un petit gros fort sympathique, qui mange comme quatre et s’en met de partout dans sa gourmandise. Mais ne pas se fier aux apparences, je l’ai vu créer un pentacle de téléportation ou je ne sais quoi, qui lui permit de matérialiser son familier, un ÉNORME rat, tellement gras qu’il a du mal à marcher. Je pense que ce sera avec lui que je vais traîner à l’académie. Voilà quelques heures que nous sommes en route pour l’académie. Neville s’est endormi, j’en profite pour commencer mon journal. Voilà pour le résumé ! Je reviendrais bientôt pour y noter plus précisément ce qui se passera prochainement.
                </v-card-text>
              </v-card>
            </v-dialog>

            <!-- Fin dialog -->
          </v-card-actions>
          <v-card-text class="mt-n10" :style="'font-size:'+police+'px'">
            Je vais bientôt entrer dans l'académie des Montagnes Bleues. Mon avenir est tracé ! Pour garder en mémoire mes aventures je vais coucher sur papier ce que j'ai vécu. Mais d'abord, faisons un bref résumé de qui je suis...
            Je m'appelle Angelus Noircorbeau, fils de Ygerne Noircorbeau serveuse dans une taverne. D'après ma mère mon père serait mort peu après ma naissance. Je suis né pendant un mois de grande chaleur, et ma mère me disait que ce jour là la neige tomba subitement. Avec cela, j’ai longtemps cru que j’avais un grand destin, mais la réalité était tout autre ! Comme tous les enfants, à 6 ans j'ai passé le test pour vérifier ma puissance martial sur la pierre de divination... Et le résultat était plus qu’affligeant... j'ai fait 4. Plus tard, à 10 ans, j'ai fait l'autre test, celui pour la puissance spirituelle... résultat sans appel ! La pierre ne s’est pas illuminée du tout, même pas un frémissement de lumière. Imaginez ma tête, moi qui croyais avoir un grand destin, je n'avais rien, même pas de familier. Tout le monde en a un, et ma mère une fois m'a montré le sien, je me souviens parfaitement, c'était le jour ou j'ai passé mon premier test avec la pierre de divination. Ce jour là, j'avais retenu mes larmes a l'école, je me faisais suffisamment charié comme ça. Une fois rentré chez moi, j'ai pleuré toutes les larmes de mon corps. Ma mère, pour me rassurer, m'a dit alors « Rassure toi, mon petit ange, tu es mon fils et tu es fort. Je vais te montrer quelque chose ». A ce moment là, elle fit apparaître un corbeau noir avec des reflets bleus, signe distinctif, le corbeau avait une petite barbiche blanche. Ce dernier me dit « peu de gens savent matérialiser un familier » et ma mère repris « si je peux le faire, alors tu le peux aussi ». Ça m'avait rassuré, et lorsque le corbeau disparu, ma mère devint chancelante, me sourit, et me répondit que c'était normal, que je n'avais pas à m'inquiéter, qu'elle allait se reposer un peu. Oui, j'étais le digne descendant de ma mère, alors tôt ou tard, je parviendrais à devenir fort. Mais après le résultat du dernier test je compris que ce n'était pas le cas. J'avais sûrement dû hériter de mon père... Peu importe, ce n'était pas si grave après tout. Je gardais espoir qu'un jour mes pouvoirs se dévoilent, et que je serais différent des autres.
            N'ayant ni force martiale, ni force spirituelle, je devais chercher un travail qui ne demandait ni l'un ni l'autre. Après mes 10 ans j'enchainais les petit boulots, mais à chaque fois je me faisait renvoyer. Et à chaque fois pour les même raisons : trop tête en l'air ; toujours dans la lune ; rêvasse trop... j'en passe et des meilleurs. J’étais doué dans tout ce que je faisait, mais... Évidemment, si le travail ne me plait pas, mon esprit divague vers des aventures plus agréables. Ca n'empêche pas certains artisans de m'embaucher de temps à autre pour une journée, voir deux, mais rarement plus. Sur le court terme, je suis très concentré. Après quatre ans de changement de travail j'avais une base dans pratiquement tous les métiers de la ville. Lorsque vinrent mes 14 ans, j'entrepris de rejoindre une caravane de marchandise. Étant habile de mes mains et polyvalent, j'ai réussi à avoir une place pour embarquer avec eux. « L'aventure ! » Me suis-je dis. Oui, l'aventure, je dois bien l'avouer, je me sentais mieux ici que dans d'autres boulots. Je faisais un peu de tout essentiellement du bricolage et de la manutention. J'étais assez mal payé, mais cela m'importait peu, le plus important pour moi, c'était cette liberté de voyager, j'étais un aventurier et c'est tout ce qui comptait ! Après deux années passées en caravane, j'avais appris quelques passes d'armes, à force de soulever les marchandises j'étais un peu plus robuste, et les petites joutes faites avec les guerriers qui gardaient la caravane, m'avaient donné un peu d'endurance et de bonnes bases en combat. Un soir où la caravane était en bivouac, je m'éloignais un peu du campement, c'était la deuxième fois qu'on passait par ici en deux ans. Je me baladais un peu. J'aperçus au loin une étrange ruine. La curiosité me poussa à y jeter un œil. J'avais pris de l'assurance ces deux années, j'allais donc voir. Je m'introduis donc dans la bâtisse. Il y avait des squelettes dépouillés, éparpillés ici et là.
            Vraisemblablement, l'endroit était truffé de piège. Mais qui dit piège, dit trésor ! J'entrepris de fouiller la zone en prenant soin de ne pas me faire happer par un piège quelconque. Parfois je voyais les pièges, mais la plupart du temps, je m'échappais in extremis d'une lame ou d'une volée de flèche. A croire que quelque part, un dieu ne voulait pas que je meure maintenant. Je fini par arriver dans une pièce, dans laquelle se trouvait une alcôve où gisait un squelette qui portait une cape finement ouvragée et tenait fermement un petit sac à dos très luxueux. Sur le moment, je me suis dit que c'était étrange. Tous les autres morts ne portaient rien. Je me souviens m'être approché lentement suspectant le piège. Une fois à portée de ces restes humains, la capte frémit et s'enroula autour de moi. D'abord, j'ai cru ma dernière heure arrivée, mais elle s'était simplement accrochée à mon cou comme si je l'avais moi-même mise là. Je me suis donc approché du sac pour le récupérer. C'est là que j'aperçu une petite bague noire en métal finement gravée sur un des doigts du cadavre. Je le mis a mon doigt, et pris le sac. Lorsque je regardai à l'intérieur, il n'y avait rien dedans. Mais vraiment rien ! Il n'y avait même pas de fond ! Je décidais de le prendre mais le sac était bien trop petit pour tenir sur mes épaules, je l’ai donc glissé en bandoulière. Etrangement, la route vers la sortie était plus rapide et plus simple qu'à l'arrivée. Une fois au dehors je m'apprêtais à partir en regardant une dernière fois les ruines, qui se volatilisèrent devant mes yeux. J'eus un frisson et une soudaine bouffé de chaleur. Je sentais la cape et le sac se mouvoir sur moi. Pris de panique, j'allais les retirer rapidement mais je me rendis compte que le sac était devenu un vieux sac en cuire simple parfaitement ajusté pour être porté en bandoulière, et la cape était devenue une simple cape en toile grisonnante. Pris de doutes, je jetai un œil à la bague, qui s'était elle aussi modifiée. Ce n'était a présent plus qu'un anneau de bois, mais toujours finement gravé. Je me souviens être resté là un moment, avec les idées confuses et des questions à en perdre la tête. J'avais peur, et pourtant, je me sentais rassuré.
            Sur la route vers la caravane, je mis un caillou dans le sac, mais impossible de le récupérer. Il doit bien y avoir une solution pour le reprendre me suis-je dis. Et subitement je me suis retrouvé dans un endroit d'une blancheur immaculée. J'aperçus le caillou à mes pieds. Soudain, je suis revenu sur la route... Je fus perplexe, mais j'ai compris comment retrouver le caillou. Il me suffisait de vouloir le récupérer. La deuxième fois j’ai réussi à revenir dans la pièce blanche, et oui il y avait bien un caillou, mais pas que ça. La pièce était remplie de trésors, armes et lingots de toutes sortes. Il y avait des montages de pièces d'or, d'argent, de cuivre et de bronze. Surpris par tant de richesse, je suspectais un instant un piège. Mais vraisemblablement, rien de cela ici. Parcourant du regard la pièce, je me rendais compte qu’il y avait une pièce a ma gauche et une autre a ma droite. Je commencé à fouiner dans tout cet ensemble de bric à brac. Des armes et des armures de toutes sortes, mais mon regard s’attardant sur sur trois tenues exposées sur trois mannequins. Il y avait une armure intégrale toute noire, une étrange robe noire elle aussi, et une tenue de dandy ouvragé avec finesse et luxe. L’ancien propriétaire était à tous les coups un puissant Magus, ou... un grand voleur ! Dans les deux cas, la prudence était de mise ! Il y avait aussi quelques armes bien spécifiques placées sur des piédestals, elles étaient noires elles aussi. Il y avait deux masses d’armes, relativement petites, j’entrepris de les prendre en main. Elles étaient plus légères que ce que j’aurais cru, donnant un petit mouvement circulaires pour les soupesés, deux puissantes masses d’air apparurent et s'écrasèrent contre les armoires qu’il y avait à côté. J’étais surpris et reposa rapidement les armes. Je constatais qu’il y avait beaucoup de vêtements de tous types dans les armoires, et bien évidement je venais de faire une bêtise.. j’allais donc changer de pièce prestement. Partant dans celle de droite, il y avait un verger à perte de vue. J’aperçus un golem s’approcher vers moi lentement. Il portait à la main un très gros panier qu’il déposa à mes pieds avant de repartir. Dans le panier il y avait toutes sortes de fruits et de légumes. Il y avait des choses que je n’avais même jamais vues. Un peu stressé, j’entrepris de visiter l’autre pièce. Une fois à l’intérieur, il y avait une petite bibliothèque, et un bureau. Sur celui-ci il y avait un gros livre. Je passé les yeux sur la bibliothèque mais impossible de comprendre quoi que ce soit. C’était écrit dans un langage que je ne connaissais pas. Pourtant il y avait bien quelques livres qui avaient des titres en langage commun. Mais vraiment très peu. Je m’asseyais au bureau et toucha du doigt le gros livre. Celui-ci s’ouvrit subitement. Et c’est à ce moment là que je fis la connaissance de mon Maitre.
            “Je vous salue,
            Je suis Angelus Noircorbeau, héritier de Vladimir Cerberos, l’un des cinq Seigneurs des neufs Provinces. ”
            J’adore cette présentation ! Bref, pour continuer mon histoire, il se trouve, comme vous l’avez compris, que mon Maître est Vladimir Cerberos. Cela fait plus de 30 000 ans que l’on n’a pas entendu parler de lui. Et ce n’est pas réellement lui que j’ai rencontré. C’est une image rémanente de lui gravée dans le gros livre du bureau. Vladimir ouvrit mon corps à son véritable pouvoir. et me refit faire le test des pierres : la première monta à 98, et la seconde s’illumina tellement qu’elle explosa. J’étais sidéré de constater la force qui était en moi. J’étais heureux et après l’avoir remercié de m’avoir pris sous son aile, je sortais du havre-sac pour reprendre la route vers la caravane. Mais mon corps devenait de plus en plus lourd. Et la douleur arrivait petit à petit. Je commençais à tituber. Sans réellement savoir pourquoi, je me suis mis à courir à toute vitesse, comme si je voulais fuir quelque chose, j’avais peur, je sentais mon heure arriver, alors j’ai fuis. j’ai couru aussi vite que j’ai pus, tombant de temps en temps, je continuais à courir de plus bel. La douleur était atroce. Mes bras prirent en volume, mes jambes et le reste de mon corps aussi. Comme si mes muscles se déchiraient... ces derniers saillant et apparent s’ajustaient dans ma tenue trop lâche pour moi. La douleur était insoutenable, ma vision se brouillait. Je fini par m’écrouler dans une rivière et m’évanouis. Le courant trop fort m’emporta avec lui.
            Je me réveillais dans une belle chambre joliment décorée, nu et couvert de bandage. Mon premier réflexe fut de chercher du regard mes affaires. Mon havresac et la cape était accrochés près du lit. Je tendais l’oreille et j’entendais au loin une femme chantonner. C’est ici que je fis la connaissance de Lucie Verdillia, une magnifique elfe buveuse de sang. Elle m'a appris à cuisiner des légumes que je n’avais jamais vus, et à entrer dans mon monde intérieur. Je suis tombé amoureux d’elle.. Et ce qui devait arriver arriva… Je perdis ma vertue avec elle. Une femme d’une beauté sans pareille. Après plusieurs semaines à ses côtés, elle m’incita à prendre la route. J’avais encore des choses à faire. Je me devais de me diriger vers une petite ville de campagne qui accueillait bientôt les sélections pour les académies. Et mon maître m’avait bien indiqué que je devais absolument m’y rendre. Je pris la route et m’y rendis.
            Il y eut bien quelques péripéties sur la route, mais je n’ai pas beaucoup de temps devant moi, alors je vais à l’essentiel, je ferais en sorte de tenir mon journal de bord dès que possible les prochaines fois.
            Une fois arrivé dans la ville, je fis pas mal de connaissances, j’achetais ma première blague à tabac, ma première pipe. Je fis aussi mes premiers duels en arène. J’étais devenu adepte de niveau un. Et mon élément de prédilection est la glace. Je me pris d’amitié pour un fantôme près des ruines sur une petite coline où je me détends le soir. Elle m’offrit trois graines d’une plante. J’en plantai une pour la remercier et gardai les deux autres. C’est aussi ici que je passai adepte de niveau deux. Je pris le temps d’affiner mes attaques, et de façonner mon monde intérieur. Ce dernier était totalement enneigé et prit petit à petit des couleurs. j’avais à présent un petit lac où se déversait une petite cascade, mon cristal de pouvoir intérieur surplombait un îlot au centre du lac, la température y était douce et agréable. a coté du lac j’ai recrée la maison de mon enfance. J’ai aussi pris le temps d’envoyer une lettre à ma mère pour l’avertir que j’étais toujours vivant. Puis vint l’heure où je devais prendre la caravane pour aller à l’académie des montagnes bleues.
            Dans la caravane je fis la connaissance de Cyluh et Luhcy. Deux magnifiques jeunes femmes qui ne me laissaient pas indifférent. Je les avais débarrassées d’un envahisseur en feintant que l’une d’elle était ma petite amie. Luhcy semble maîtriser le froid, et Cyluh la chaleur. Je ne m’attardais pas, je ne voulais pas passer pour un envahisseur à mon tour. J’allais donc m’installer dans une cabine seul. Et c’est là que j’ai fait la connaissance de Neville GRAYRATIS, un petit gros fort sympathique, qui mange comme quatre et s’en met de partout dans sa gourmandise. Mais ne pas se fier aux apparences, je l’ai vu créer un pentacle de téléportation ou je ne sais quoi, qui lui permit de matérialiser son familier, un ÉNORME rat, tellement gras qu’il a du mal à marcher. Je pense que ce sera avec lui que je vais traîner à l’académie. Voilà quelques heures que nous sommes en route pour l’académie. Neville s’est endormi, j’en profite pour commencer mon journal. Voilà pour le résumé ! Je reviendrais bientôt pour y noter plus précisément ce qui se passera prochainement.
          </v-card-text>
          <v-card-actions width="100%">
            <v-row class="d-flex justify-space-between">
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0 justify-start" width="100%">
                  <v-icon icon class="pa-2">mdi-chevron-left</v-icon>chapitre précedent
                </v-btn>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0" width="100%">liste des chapitres</v-btn>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0 justify-end" width="100%">
                  chapitre suivant
                  <v-icon icon class="pa-2">mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">information suplémentaires</v-card>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">Historique des modifications</v-card>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">Derniers commentaires</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    police: 10,
    items: [
      {
        text: "Biblothéque",
        disabled: false,
        href: "bibliotheque"
      },
      {
        text: "Chapitre",
        disabled: false,
        href: "chapitre"
      },
      {
        text: "Texte 1",
        disabled: true,
        href: "histoire"
      }
    ]
  }),
  methods: {
    increase() {
      this.police += 2;
    },
    decrease() {
      this.police -= 2;
    }
  }
};
</script>