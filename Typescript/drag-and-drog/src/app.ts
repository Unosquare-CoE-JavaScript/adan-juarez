// import interfaces, special syntax by typescript

/* Refactoring version */

import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
/*
/// <reference path="drag-drop-interfaces.ts" />
/// <reference path="project-model.ts" />

namespace App {

    // Project State Management
    type Listener<T> = (items: T[]) => void;

    class State<T> {
        protected listeners: Listener<T>[] = [];

        addListener(listenerFn: Listener<T>) {
            this.listeners.push(listenerFn);
        }
    }

    class ProjectState {
        //array of function reference
        private listeners: any[] = []
        private projects: any[] = []
        private static instance: ProjectState

        private constructor() {

        }

        static getInstance() {
            if (this.instance) {
                return this.instance
            }
            this.instance = new ProjectState()
            return this.instance
        }

        addListener(listenerFn: Function) {
            this.listeners.push(listenerFn)
        }

        addProject(title: string, description: string, numOfPeople: number) {
            const newProject = new Project(
                /*
                id: Math.random().toString(),
                title: title,
                description: description,
                people: numOfPeople, 
                refactor with a class*/
                /*
                Math.random().toString(),
                title,
                description,
                numOfPeople,
                ProjectStatus.Active
            )
            this.projects.push(newProject)
            this.updateListeners()

        }
        moveProject(projectId: string, newStatus: ProjectStatus) {
            const project = this.projects.find(prj => prj.id === projectId)
            if (project && project.status !== newStatus) {
                project.status = newStatus
                this.updateListeners()
            }
        }

        private updateListeners() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice())
            }
        }

    }
    // global instance
    const projectState = ProjectState.getInstance()

    //validation 
    interface Validatable {
        value: string | number
        required?: boolean
        minLength?: number
        maxLength?: number
        min?: number
        max?: number
    }

    function validate(validatableInput: Validatable) {
        let isValid = true
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0
        }
        if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
            isValid = isValid && validatableInput.value.length >= validatableInput.minLength
        }

        if (validatableInput.max != null && typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value <= validatableInput.max
        }
        if (validatableInput.max != null && typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid
    }

    // autobind decorator: Is a function
    function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
        // to manage methosName errors and others. You can change the tsconfig noImplicitAny: false and add
        // experimentalDecorators: true or change to underscore names as _ or _2, etc with the _
        const originalMethod = descriptor.value
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this)
                return boundFn
            }
        }
        return adjDescriptor
    }

    // Component Base Class
    abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        templateElement: HTMLTemplateElement
        hostElement: T
        element: U

        constructor(
            templateId: string,
            hostElementId: string,
            insertAtStart: boolean,
            newElementId?: string
        ) {
            this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement

            this.hostElement = document.getElementById(hostElementId)! as T;
            const importedNode = document.importNode(
                this.templateElement.content,
                true
            )

            this.element = importedNode.firstElementChild as U

            if (newElementId) {
                this.element.id = newElementId
            }
            this.attach(insertAtStart)

        }
        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(
                insertAtBeginning ? 'afterbegin' : 'beforeend',
                this.element
            )
        }
        abstract configure(): void
        abstract renderContent(): void
    }

    // ProjectList Class
    class ProjectList extends Component<HTMLDivElement, HTMLElement>
        implements DragTarget {
        //templateElement: HTMLTemplateElement
        //hostElement: HTMLDivElement
        //element: HTMLElement
        assignedProjects: Project[]

        constructor(private type: 'active' | 'finished') {
            super('project-list', 'app', false, `${type}-projects`);
            this.assignedProjects = [];

            this.configure();
            this.renderContent();
            /*
                /* initialization */
            /* this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement
             this.hostElement = document.getElementById('app')! as HTMLDivElement
             this.assignedProjects = []
     
             const importedNode = document.importNode(this.templateElement.content, true)
             this.element = importedNode.firstElementChild as HTMLElement
             this.element.id = `${type}-projects`;
             //pass a list of function
             projectState.addListener((projects: any[]) => {
                 this.assignedProjects = projects
                 this.renderProjects()
             })
         
             this.attach()
             this.renderContent()
             this.renderProjects()
         */
        } 

        /*
        @autobind
        dragOverHandler(event: DragEvent) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable');
            }
        }

        @autobind
        dropHandler(event: DragEvent) {
            const prjId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(
                prjId,
                this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
            );
        }

        @autobind
        dragLeaveHandler(_: DragEvent) {
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.remove('droppable');
        }

        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);

            projectState.addListener((projects: Project[]) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === ProjectStatus.Active;
                    }
                    return prj.status === ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }

        private renderContent() {
            const listId = `${this.type}-projects-list`
            this.element.querySelector('ul')!.id = listId
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS'
        }
        private renderProjects() {
            const listEl = document.getElementById(`${this.type} -projects-list`)! as HTMLLIElement
            for (const projItems of this.assignedProjects) {
                const listItme = document.createElement('li')
                listItme.textContent = projItems.title
                listEl.appendChild(listItme)
            }
        }
    }

    class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
        implements Draggable {
        private project: Project

        get persons() {
            if (this.project.people === 1) {
                return '1 person'
            } else {
                return `${this.project.people} persons`;
            }
        }

        constructor(hostId: string, project: Project) {
            super('single-project', hostId, false, project.id)
            this.project = project

            this.configure()
            this.renderContent()
        }

        @autobind
        dragStartHandler(event: DragEvent): void {
            event.dataTransfer!.setData('text/plain', this.project.id)
            event.dataTransfer!.effectAllowed = 'move'
        }

        dragEndHandler(_event: DragEvent): void {
            console.log('DragEnd')
        }
        configure() {
            this.element.addEventListener('dragstart', this.dragEndHandler)
            this.element.addEventListener('dragend', this.dragEndHandler)
        }

        renderContent() {
            this.element.querySelector('h2')!.textContent = this.project.title
            this.element.querySelector('h3')!.textContent = this.persons + ' assigned'
            this.element.querySelector('p')!.textContent = this.project.description
        }
    }

    class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
        //templateElement: HTMLTemplateElement
        //hostElement: HTMLDivElement
        //element: HTMLFormElement
        titleInputElement: HTMLInputElement
        descriptionInputElement: HTMLInputElement
        peopleInputElement: HTMLInputElement

        constructor() {
            /* this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
            this.hostElement = document.getElementById('app')! as HTMLDivElement
    
            const importedNode = document.importNode(this.templateElement.content, true)
            this.element = importedNode.firstElementChild as HTMLFormElement
            this.element.id = 'user-input';
    
            this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
    
            this.attach()
            this.configure();*/
            /*
            super('project-input', 'app', true, 'user-input');
            this.titleInputElement = this.element.querySelector(
                '#title'
            ) as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector(
                '#description'
            ) as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector(
                '#people'
            ) as HTMLInputElement;
            this.configure();
        }

        configure() {
            this.element.addEventListener('submit', this.submitHandler)
        }

        renderContent(): void { }

        private gatherUserInput(): [string, string, number] | void {

            const enteredTitle = this.titleInputElement.value
            const enteredDescription = this.descriptionInputElement.value
            const enteredPeople = this.peopleInputElement.value

            const titleValidatable: Validatable = {
                value: enteredTitle,
                required: true
            }

            const descriptionValidatable: Validatable = {
                value: enteredTitle,
                required: true,
                minLength: 5
            }
            const peopletitleValidatable: Validatable = {
                value: +enteredTitle,
                required: true,
                min: 5
            }
            //validation
            //if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
            if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopletitleValidatable)) {
                alert('Invalid input, please try again!')
                return;
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople]
            }
        }

        //clear all inputs after
        private clearInputs() {
            this.titleInputElement.value = ''
            this.descriptionInputElement.value = ''
            this.peopleInputElement.value = ''
        }

        @autobind //this decorator avoid us use .bind
        private submitHandler(event: Event) {
            event.preventDefault();
            const userInput = this.gatherUserInput()
            //check userInput validation
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput
                console.log(title, desc, people)
                console.log(this.clearInputs())
            }
            //console.log(this.titleInputElement.value);
        }

        //private configure() {
        //this.submitHandler.bind(this)
        //  this.element.addEventListener('submit', this.submitHandler);
        //}
    }

    const projInput = new ProjectInput()
    const activePrjList = new ProjectList('active')
    const finishedPrjList = new ProjectList('finished')

}
*/