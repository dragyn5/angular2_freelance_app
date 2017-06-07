import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(223, 'Abc Company', 'http://portfolio.ryanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalTwo: Proposal = new Proposal(50, 'XYZ Company', 'http://portfolio.ryanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalThree: Proposal = new Proposal(15, 'Great something Company', 'http://portfolio.ryanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

  proposals: Proposal[] = [
  this.proposalOne, 
  this.proposalTwo, 
  this.proposalThree
  ]
}

