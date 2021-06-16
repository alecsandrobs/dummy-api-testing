import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import axios from "axios";

export class Actors implements Cast {

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.using(axios.create({
                timeout: 30000,
                baseURL: 'http://dummy.restapiexample.com/api/v1'
            }) as any),
            TakeNotes.usingAnEmptyNotepad()
        )
    }
}