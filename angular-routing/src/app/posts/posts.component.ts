import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(
      public postsService: PostsService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);

      this.showIds = params.showIds === "true";
    });

    this.route.fragment.subscribe((fragment) => console.log("Current fragment is ", fragment));
  }

  showIdsProgram() {
    this.router.navigate(
        ["/posts"],
        {
          queryParams: {
            showIds: true
          },
          fragment: "program-fragment"
        });
  }
}
