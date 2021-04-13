import { expect } from "chai";
import { createFBStorageAPI } from "../createFBStorageAPI.js";

const mockFirebase = {
    get: () => Promise.resolve({ val: () => ({ id: 0 }) }),
    set: ( v ) => Promise.resolve( v )
};

const wait = ( time ) =>
    new Promise( ( res ) => {
        setTimeout( res(), time );
    });

describe( "createFBStorageAPI", () => {
    it( "should provide the functions for a redux-persist storage", () => {
        const actual = Object.keys( createFBStorageAPI( mockFirebase ) );
        const expected = [ "getItem", "setItem", "deleteItem" ];
        expect( actual ).to.members( expected );
    });
    it( "getItem should return a promised value", async () => {
        const actual = await createFBStorageAPI( mockFirebase, 0 )
            .getItem()
            .then( ( v ) => v.id );
        const expected = 0;
        expect( actual ).to.eqls( expected );
    });
    it( "setItem should return a promised", async () => {
        const actual = await createFBStorageAPI( mockFirebase )
            .setItem( 1 )
            .then( ( v ) => v );
        const expected = 1;
        await wait( 2100 );
        expect( actual ).to.eqls( expected );
    });
});
