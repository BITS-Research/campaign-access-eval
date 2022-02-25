Search.setIndex({docnames:["access_eval","access_eval.analysis","access_eval.bin","access_eval.middlewares","access_eval.spiders","contributing","index","modules","results_explainer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["access_eval.rst","access_eval.analysis.rst","access_eval.bin.rst","access_eval.middlewares.rst","access_eval.spiders.rst","contributing.rst","index.rst","modules.rst","results_explainer.md"],objects:{"":[[0,0,0,"-","access_eval"]],"access_eval.analysis":[[1,0,0,"-","communication"],[1,0,0,"-","constants"],[1,0,0,"-","core"],[1,0,0,"-","parse_axe_results"],[1,0,0,"-","plotting"],[1,0,0,"-","utils"]],"access_eval.analysis.communication":[[1,1,1,"","generate_email_text"]],"access_eval.analysis.constants":[[1,2,1,"","ComputedField"],[1,2,1,"","ComputedFields"],[1,2,1,"","DatasetFields"]],"access_eval.analysis.constants.ComputedField":[[1,3,1,"","func"],[1,3,1,"","name"]],"access_eval.analysis.constants.ComputedFields":[[1,3,1,"","avg_critical_errors_per_page_post"],[1,3,1,"","avg_critical_errors_per_page_pre"],[1,3,1,"","avg_errors_per_page_post"],[1,3,1,"","avg_errors_per_page_pre"],[1,3,1,"","avg_minor_errors_per_page_post"],[1,3,1,"","avg_minor_errors_per_page_pre"],[1,3,1,"","avg_moderate_errors_per_page_post"],[1,3,1,"","avg_moderate_errors_per_page_pre"],[1,3,1,"","avg_number_of_words_per_page"],[1,3,1,"","avg_serious_errors_per_page_post"],[1,3,1,"","avg_serious_errors_per_page_pre"],[1,3,1,"","diff_critical_errors"],[1,3,1,"","diff_errors"],[1,3,1,"","diff_minor_errors"],[1,3,1,"","diff_moderate_errors"],[1,3,1,"","diff_pages"],[1,3,1,"","diff_serious_errors"],[1,3,1,"","vote_share_per_critical_error"],[1,3,1,"","vote_share_per_error"],[1,3,1,"","vote_share_per_minor_error"],[1,3,1,"","vote_share_per_moderate_error"],[1,3,1,"","vote_share_per_serious_error"]],"access_eval.analysis.constants.DatasetFields":[[1,3,1,"","campaign_website_url"],[1,3,1,"","candidate_funding"],[1,3,1,"","candidate_history"],[1,3,1,"","candidate_position"],[1,3,1,"","contacted"],[1,3,1,"","ease_of_reading"],[1,3,1,"","election_result"],[1,3,1,"","election_type"],[1,3,1,"","electoral_position"],[1,3,1,"","eligible_voting_population"],[1,3,1,"","error_type_x"],[1,3,1,"","funding_share"],[1,3,1,"","location"],[1,3,1,"","number_of_critical_errors_post"],[1,3,1,"","number_of_critical_errors_pre"],[1,3,1,"","number_of_minor_errors_post"],[1,3,1,"","number_of_minor_errors_pre"],[1,3,1,"","number_of_moderate_errors_post"],[1,3,1,"","number_of_moderate_errors_pre"],[1,3,1,"","number_of_pages_post"],[1,3,1,"","number_of_pages_pre"],[1,3,1,"","number_of_serious_errors_post"],[1,3,1,"","number_of_serious_errors_pre"],[1,3,1,"","number_of_total_errors_post"],[1,3,1,"","number_of_total_errors_pre"],[1,3,1,"","number_of_unique_words"],[1,3,1,"","number_of_votes_for_candidate"],[1,3,1,"","number_of_votes_for_race"],[1,3,1,"","number_of_words"],[1,3,1,"","race_funding"],[1,3,1,"","trial"],[1,3,1,"","vote_share"]],"access_eval.analysis.core":[[1,2,1,"","CompiledMetrics"],[1,2,1,"","RunningMetrics"],[1,2,1,"","WordMetric"],[1,1,1,"","combine_election_data_with_axe_results"],[1,1,1,"","flatten_access_eval_2021_dataset"],[1,1,1,"","get_crucial_stats"],[1,1,1,"","load_access_eval_2021_dataset"],[1,1,1,"","process_axe_evaluations_and_extras"]],"access_eval.analysis.core.CompiledMetrics":[[1,3,1,"","critical_violations"],[1,3,1,"","ease_of_reading"],[1,3,1,"","error_types"],[1,4,1,"","from_dict"],[1,4,1,"","from_json"],[1,3,1,"","minor_violations"],[1,3,1,"","moderate_violations"],[1,3,1,"","number_of_unique_words"],[1,3,1,"","number_of_words"],[1,3,1,"","pages"],[1,4,1,"","schema"],[1,3,1,"","serious_violations"],[1,4,1,"","to_dict"],[1,4,1,"","to_json"]],"access_eval.analysis.core.RunningMetrics":[[1,3,1,"","critical_violations"],[1,4,1,"","from_dict"],[1,4,1,"","from_json"],[1,3,1,"","minor_violations"],[1,3,1,"","moderate_violations"],[1,3,1,"","pages"],[1,4,1,"","schema"],[1,3,1,"","serious_violations"],[1,4,1,"","to_dict"],[1,4,1,"","to_json"],[1,3,1,"","word_metrics"]],"access_eval.analysis.core.WordMetric":[[1,3,1,"","ease_of_reading"],[1,4,1,"","from_dict"],[1,4,1,"","from_json"],[1,4,1,"","schema"],[1,4,1,"","to_dict"],[1,4,1,"","to_json"],[1,3,1,"","unique_words"],[1,3,1,"","words"]],"access_eval.analysis.parse_axe_results":[[1,2,1,"","AggregateAxeViolation"],[1,2,1,"","AxeImpact"],[1,2,1,"","SimplifiedAxeViolation"],[1,1,1,"","generate_high_level_statistics"]],"access_eval.analysis.parse_axe_results.AggregateAxeViolation":[[1,4,1,"","from_dict"],[1,4,1,"","from_json"],[1,3,1,"","help_url"],[1,3,1,"","id"],[1,3,1,"","impact"],[1,3,1,"","impact_score"],[1,3,1,"","number_of_elements_in_violation"],[1,3,1,"","number_of_pages_affected"],[1,3,1,"","reason"],[1,4,1,"","schema"],[1,4,1,"","to_dict"],[1,4,1,"","to_json"]],"access_eval.analysis.parse_axe_results.AxeImpact":[[1,3,1,"","critical"],[1,3,1,"","minor"],[1,3,1,"","moderate"],[1,3,1,"","serious"]],"access_eval.analysis.parse_axe_results.SimplifiedAxeViolation":[[1,4,1,"","from_dict"],[1,4,1,"","from_json"],[1,3,1,"","help_url"],[1,3,1,"","id"],[1,3,1,"","impact"],[1,3,1,"","impact_score"],[1,3,1,"","number_of_elements_in_violation"],[1,3,1,"","reason"],[1,4,1,"","schema"],[1,4,1,"","to_dict"],[1,4,1,"","to_json"]],"access_eval.analysis.plotting":[[1,1,1,"","plot_candidate_position_based_summary_stats"],[1,1,1,"","plot_categorical_against_errors_boxplots"],[1,1,1,"","plot_computed_fields_over_vote_share"],[1,1,1,"","plot_election_result_based_summary_stats"],[1,1,1,"","plot_electoral_position_based_summary_stats"],[1,1,1,"","plot_error_types_boxplots"],[1,1,1,"","plot_location_based_summary_stats"],[1,1,1,"","plot_locations_against_errors_boxplots"],[1,1,1,"","plot_pre_post_errors"],[1,1,1,"","plot_pre_post_fields_compare"],[1,1,1,"","plot_summary_stats"]],"access_eval.analysis.utils":[[1,1,1,"","unpack_data"]],"access_eval.bin":[[2,0,0,"-","analyze_access_eval_2021_dataset"],[2,0,0,"-","generate_access_eval_2021_dataset"],[2,0,0,"-","post_process_access_eval"]],"access_eval.bin.analyze_access_eval_2021_dataset":[[2,2,1,"","Args"],[2,1,1,"","main"]],"access_eval.bin.generate_access_eval_2021_dataset":[[2,2,1,"","Args"],[2,1,1,"","main"]],"access_eval.bin.post_process_access_eval":[[2,2,1,"","Args"],[2,1,1,"","main"]],"access_eval.middlewares":[[3,0,0,"-","redirected_offsite"]],"access_eval.middlewares.redirected_offsite":[[3,2,1,"","OffsiteDownloaderMiddleware"]],"access_eval.middlewares.redirected_offsite.OffsiteDownloaderMiddleware":[[3,4,1,"","process_request"]],"access_eval.spiders":[[4,0,0,"-","access_eval_spider"]],"access_eval.spiders.access_eval_spider":[[4,2,1,"","AccessEvalSpider"]],"access_eval.spiders.access_eval_spider.AccessEvalSpider":[[4,3,1,"","name"],[4,4,1,"","parse"],[4,4,1,"","parse_result"],[4,4,1,"","start_requests"]],"access_eval.utils":[[0,1,1,"","clean_url"]],access_eval:[[1,0,0,"-","analysis"],[2,0,0,"-","bin"],[0,0,0,"-","constants"],[3,0,0,"-","middlewares"],[0,0,0,"-","settings"],[4,0,0,"-","spiders"],[0,0,0,"-","utils"],[0,0,0,"-","version"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"0":1,"00":1,"1":8,"10":1,"100000":1,"10000000":1,"12":1,"123":1,"1234":1,"12345":1,"123456":1,"14":8,"1st":8,"2":8,"2021":[1,6],"21":1,"234":1,"24500000":1,"2468":1,"24680":1,"3":[1,5,8],"34":1,"350000":1,"4":[1,8],"42":1,"45":1,"450":1,"47":1,"4pt":8,"5":8,"9":[1,5],"93":8,"999":1,"9999":1,"break":8,"byte":1,"case":[6,8],"class":[1,2,3,4],"default":1,"do":[1,8],"export":5,"final":1,"float":1,"function":1,"int":1,"new":[1,5],"null":8,"public":[1,8],"return":1,"short":[5,8],"static":8,"true":1,"while":5,A:[1,5,6,8],As:8,But:6,For:[1,6],If:[1,5,6,8],In:[1,6,8],It:[5,6,8],Not:1,Such:1,The:[1,8],Then:5,There:1,These:1,To:6,_axe_scraping_result:1,aa:8,access:[0,1,2,3,4,5],access_eval_spid:[0,7],accessevalspid:4,action:5,activ:5,ad:[1,8],add:[1,5],addit:8,addition:[1,6,8],affect:8,after:1,again:1,against:8,aggreg:1,aggregateaxeviol:1,all:[1,5,6,8],allow:1,allow_nan:1,alreadi:[1,8],also:[5,6,8],alwai:[5,8],amount:1,an:[1,8],anaconda:5,analysi:[0,7],analyz:[6,8],analyze_access_eval_2021_dataset:[0,7],anchor:8,ani:[1,4,5,6,8],anova:6,api:1,applic:8,appreci:5,ar:[1,5,6,8],arg:[2,4],argpars:2,associ:1,avail:6,averag:1,avg_critical_errors_per_page_post:1,avg_critical_errors_per_page_pr:1,avg_error:1,avg_errors_per_pag:1,avg_errors_per_page_post:1,avg_errors_per_page_pr:1,avg_minor_errors_per_page_post:1,avg_minor_errors_per_page_pr:1,avg_moderate_errors_per_page_post:1,avg_moderate_errors_per_page_pr:1,avg_number_of_words_per_pag:1,avg_serious_errors_per_page_post:1,avg_serious_errors_per_page_pr:1,ax:1,axe_results_dir:1,axeapi:8,axeimpact:1,b:[1,5,8],back:1,background:8,base:[1,2,3,4],basic:1,been:1,befor:1,begin:1,better:6,between:[6,8],bgcolor:8,bin:[0,7],bit:[5,8],bodi:8,bool:1,both:[1,8],br:5,branch:5,brew:5,bugfix:5,build:[5,6],bump2vers:5,bytearrai:1,calcul:1,call:[1,6,8],callabl:1,campaign:[1,5,8],campaign_website_url:1,can:[1,5,6,8],candid:1,candidate_fund:1,candidate_histori:1,candidate_posit:1,categor:1,cd:5,censu:6,challeng:1,chang:5,check:[5,8],check_circular:1,checkout:5,child:8,children:1,ci:5,clarif:8,classif:8,classmethod:1,clean:1,clean_url:0,clone:[5,6],color:8,column:1,com:[1,5,8],combin:[1,6],combine_election_data_with_axe_result:1,commit:5,common:[1,8],commun:[0,7],compiledmetr:1,complet:6,complex:1,comput:1,computedfield:1,concept:6,conda:5,constant:7,constitu:6,contact:1,contain:[1,5,6,8],content:7,context:1,contrast:8,contrastratio:8,contribut:6,core:[0,7],correl:6,council:1,count:[1,8],crawl:4,crawlspid:4,creat:[1,5,6,8],credit:5,critic:1,critical_viol:1,csv:[1,8],current:8,custom:1,data:[1,6,8],dataclasses_json:1,datafram:1,dataset:[1,6],datasetfield:1,date:5,dequ:8,dequeunivers:8,describ:6,descript:[1,5,8],dest:1,destin:1,detail:[5,8],dev:5,dict:1,dictionari:1,diff:1,diff_critical_error:1,diff_error:1,diff_minor_error:1,diff_moderate_error:1,diff_pag:1,diff_serious_error:1,digit:6,direct:1,directori:[1,5,6,8],disabl:6,document:8,doe:8,donat:1,done:5,down:8,download:5,drop:1,dump_onli:1,dure:[1,5,8],e:[1,5,6,8],each:[1,5,8],eas:1,ease_of_read:1,easili:6,edit:5,either:1,elect:1,election_data:1,election_result:1,election_typ:1,elector:1,electoral_posit:1,element:[6,8],elig:1,eligible_voting_popul:1,email:[1,8],email_text:1,encode_json:1,enough:8,ensur:[6,8],ensure_ascii:1,entir:1,environ:5,equal:1,error:1,error_typ:1,error_type_x:1,etc:[1,6,8],eval:[0,1,2,3,4,5],evalu:[1,8],everi:5,ex:5,exactli:8,exampl:[1,6,8],exclud:1,execut:5,exist:1,expand:1,expect:8,expectedcontrastratio:8,explain:8,extern:1,extra:1,f9f4ec:8,failuresummari:8,fals:1,familiar:8,featur:[1,5],ff4f5e:8,fgcolor:8,field:[1,8],file:[1,5,6,8],fill:5,find:[1,8],fix:8,flatten:1,flatten_access_eval_2021_dataset:1,flesch:1,folder:8,follow:[6,8],font:8,fontsiz:8,fontweight:8,foreground:8,fork:[5,6],formula:1,found:[1,5,8],frame:1,from:[1,5,6,8],from_dict:1,from_json:1,full:[1,6],full_data:1,func:1,fund:1,funding_shar:1,geckodriv:[5,6],gener:[1,6,8],generate_access_eval_2021_dataset:[0,7],generate_email_text:1,generate_extra:1,generate_high_level_statist:1,get_crucial_stat:1,gh:5,git:5,github:[1,5],given:5,glob:1,goe:5,googl:1,greatli:5,ha:[1,8],had:1,handl:5,happi:8,have:[1,8],head:8,head_dir:1,header:1,held:1,help:[5,6,8],help_url:[1,8],helpurl:8,here:5,high:1,histori:1,home:[5,6],hostedtoolcach:1,how:[5,6,8],howev:8,href:8,html:[5,8],htmlrespons:4,http:[1,4,6,8],i:[1,5,6,8],id:[1,8],impact:[1,8],impact_scor:[1,8],improv:8,includ:[1,5],incumb:1,indent:1,independ:1,index:6,individu:[1,6,8],infer_miss:1,inform:1,input:1,instal:6,instanc:1,instead:1,instruct:6,insuffici:8,integ:8,interest:8,interpret:8,io:[1,6],item:8,jacksonmaxfield:[1,6],json:[6,8],just:1,keep_col:1,kv:1,kw:1,kwarg:4,la:1,lambda:1,languag:6,latest:1,layout:8,level:[0,1],lexic:1,li:8,lib:1,librari:[5,6],like:[1,8],link:[6,8],lint:5,linux:5,list:[1,8],littl:5,live:8,load:1,load_access_eval_2021_dataset:1,load_onli:1,local:5,locat:1,look:8,lose:1,lost:1,low:6,m2r:5,m:5,mac:5,mai:8,main:2,maintain:5,major:[1,5],make:[5,6,8],manag:5,mani:[1,5,6],mark:8,materi:6,mayor:1,md:6,mean:8,meet:8,memori:1,messag:[1,8],metric:1,middlewar:[0,7],miniconda:5,minor:[1,5],minor_viol:1,mirror:8,miss:[1,8],missingdata:8,mm:1,mode:5,moder:1,moderate_viol:1,modul:[6,7],monei:1,more:[1,8],most:[1,5,8],multipl:6,municip:1,must:8,n:8,name:[1,4,5,8],namedtupl:1,namespac:2,navig:6,need:8,never:1,node:8,none:[1,2,3,4,8],normal:8,notabl:1,note:1,notic:8,now:[1,5,8],nth:8,number:[1,8],number_of_critical_errors_post:1,number_of_critical_errors_pr:1,number_of_elements_in_viol:[1,8],number_of_minor_errors_post:1,number_of_minor_errors_pr:1,number_of_moderate_errors_post:1,number_of_moderate_errors_pr:1,number_of_pages_affect:[1,8],number_of_pages_post:1,number_of_pages_pr:1,number_of_serious_errors_post:1,number_of_serious_errors_pr:1,number_of_total_errors_post:1,number_of_total_errors_pr:1,number_of_unique_word:1,number_of_votes_for_candid:1,number_of_votes_for_rac:1,number_of_word:1,object:1,offic:1,offici:1,offsit:3,offsitedownloadermiddlewar:3,offsitemiddlewar:3,onc:6,onli:[1,8],open:1,opt:1,option:[1,4],order:[1,8],org:1,origin:[1,5,8],orlean:1,other:[1,5],our:[5,6,8],output:8,over:[1,8],own:8,packag:[5,6,7],page:[1,6],panda:1,paper:[1,6],paramet:1,parent:[1,8],pars:[4,8],parse_axe_result:[0,7],parse_const:1,parse_float:1,parse_int:1,parse_result:4,partial:1,particular:8,pass:5,patch:5,path:[1,5,8],pathlib:1,pd:1,pdf:[6,8],peopl:1,per:1,percent:1,pick:8,pip:[5,6],place:[1,6],plain:8,plan:6,platform:6,pleas:[5,8],plot:[0,6,7],plot_candidate_position_based_summary_stat:1,plot_categorical_against_errors_boxplot:1,plot_computed_fields_over_vote_shar:1,plot_election_result_based_summary_stat:1,plot_electoral_position_based_summary_stat:1,plot_error_types_boxplot:1,plot_kwarg:1,plot_location_based_summary_stat:1,plot_locations_against_errors_boxplot:1,plot_pre_post_error:1,plot_pre_post_fields_compar:1,plot_summary_stat:1,point:5,polici:8,polit:6,popul:6,posit:1,posixpath:1,possibl:[1,5,8],post:1,post_contact_axe_scraping_result:1,post_process_access_ev:[0,7],potenti:6,pre:1,pre_contact_axe_scraping_result:1,preliminari:6,preload:1,previous:1,primari:1,prior:8,process:[1,8],process_axe_evaluations_and_extra:1,process_request:3,produc:6,progress:1,project:5,proof:6,propos:8,provid:1,publish:5,pull:[1,5,8],push:5,pypi:5,python3:1,python:[1,5],question:8,quickli:[6,8],race:1,race_fund:1,rais:1,rang:1,ratio:8,raw:5,re:5,read:[1,5],readi:5,reason:[1,8],receiv:1,recommend:5,recurs:1,redirected_offsit:[0,7],referenc:8,regard:6,regardless:8,relatednod:8,releas:5,remind:5,remov:1,repo:[5,6],report:6,request:[3,5],requir:6,resolv:5,respect:1,respond:8,respons:4,result:1,rule:8,run:[1,5,6,8],runningmetr:1,runoff:1,s:[1,5,8],same:[1,8],save_path:1,schema:1,schemaf:1,scrape:1,scraper:1,scrapi:[3,4],scrapy_selenium:4,script:2,search:6,seattl:1,section:8,see:[1,5,6,8],seleniumrequest:[3,4],self:8,separ:1,seriou:[1,8],serious_viol:1,set:[1,5,7],setup:6,sever:[1,8],share:1,shivam5992:1,shortnam:8,should:[1,8],similar:8,simpl:8,simpli:8,simplifi:1,simplifiedaxeviol:1,singl:[1,8],site:[1,8],six:8,size:8,skip:[1,8],skipkei:1,so:1,some:[1,5],someth:[5,8],sort:8,sort_kei:1,sourc:[0,1,2,3,4],specif:[1,8],specifi:8,spend:6,spider:[0,3,7],spidermiddlewar:3,spoken:6,spreadsheet:1,start:[1,8],start_request:4,stat:[3,6],statist:[1,6],store:[1,5,8],str:[0,1,4],structur:8,studi:6,sub:1,submit:5,submodul:7,subpackag:7,subsect:8,subset:1,subset_nam:1,suffici:8,suggest:1,sum:1,summar:1,support:8,sure:5,t:6,tag:5,take:6,tar:5,target:8,technolog:8,termin:6,test:[5,6,8],text:[1,8],textstat:1,thei:5,them:6,thi:[1,5,6,8],threshold:8,through:5,tiff:5,time:[5,6],title_post:1,to_dict:1,to_json:1,took:1,tool:[6,8],toolset:8,top:[0,8],total:1,tree:1,trial:1,tupl:1,txt:8,type:1,type_:1,type_fram:1,type_label_pr:1,type_x:1,ultim:1,un:5,understand:6,union:1,uniqu:1,unique_word:1,univers:8,unknown:1,unpack:1,unpack_data:1,unzip:[1,5],up:[5,8],url:[0,1,6],us:[1,5,6,8],user:5,usernam:5,util:[7,8],valu:1,variabl:1,varieti:8,veri:8,version:[1,5,7],violat:1,virtualenv:5,vision:6,vote:1,vote_shar:1,vote_share_per_critical_error:1,vote_share_per_error:1,vote_share_per_minor_error:1,vote_share_per_moderate_error:1,vote_share_per_serious_error:1,voter:8,vs:1,wa:[1,8],want:5,wcag:8,we:[1,6,8],web:6,webpag:8,websit:[1,5,8],weight:8,welcom:5,well:1,went:8,were:8,what:5,when:[1,5],where:[1,8],which:[1,6,8],whole:1,why:8,win:1,won:1,word:1,word_metr:1,wordmetr:1,work:[5,8],would:8,wrong:[5,8],www:[1,8],x64:1,x:1,you:[5,6,8],your:[5,8],your_development_typ:5,your_name_her:5,zip:1,zipfil:1},titles:["access_eval package","access_eval.analysis package","access_eval.bin package","access_eval.middlewares package","access_eval.spiders package","Contributing","Welcome to access-eval\u2019s documentation!","access_eval","Understanding the Produced Results"],titleterms:{Not:8,access:[6,8],access_ev:[0,1,2,3,4,7],access_eval_spid:4,action:6,aggreg:8,analysi:[1,6],analyze_access_eval_2021_dataset:2,ax:[6,8],background:6,basic:8,bin:2,campaign:6,commun:1,constant:[0,1],content:[0,1,2,3,4,8],contribut:5,core:1,deploi:5,develop:5,document:6,eval:6,evalu:6,full:8,generate_access_eval_2021_dataset:2,get:5,github:6,includ:8,indic:6,instal:5,maintain:6,middlewar:3,modul:[0,1,2,3,4],packag:[0,1,2,3,4],page:8,parse_axe_result:1,plot:1,post_process_access_ev:2,produc:8,recreat:6,redirected_offsit:3,report:8,result:8,s:6,scraper:6,set:0,spider:4,start:5,submodul:[0,1,2,3,4],subpackag:0,summar:8,tabl:6,understand:8,usag:6,util:[0,1],version:0,violat:8,websit:6,welcom:6}})